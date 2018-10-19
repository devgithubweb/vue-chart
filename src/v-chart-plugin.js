var d3 = Object.assign({},
    require('d3-selection')
);
import barChart     from './import/barChart'
import vBarChart    from './import/vBarChart'
import lineGraph    from './import/lineGraph'
import scatterPlot  from './import/scatterPlot'
import pieChart     from './import/pieChart'
import areaChart    from './import/areaChart'

/** @name v-chart-plugin-module 
 * @description This plugin is designed to allow Vue.js developers to incorporate fully reactive and customizable charts into your applications. The plugin is built off of the D3.js JavaScript library for manipulating documents based on data. By binding data from your components you can create complex charts and graphs that respond to changes in your application. Vue.js lifecycle events will trigger the charts to update and maintain two-way binding between your charts and your data. By adding in a state management (such as Vuex) you can additionally persist state across an entire application.
 * @exports Chart
*/
const Chart = {
    install(Vue, options) {
        Vue.component('v-chart', {
            props: ['chartData'],
            data: function () {
                return {
                    selector: this.chartData.selector + '-' + this.chartData.chartType
                }
            },
            methods: {
                /**
                 * @method initalizeChart
                 * @description Generate a new Chart of type chartType
                 */
                initalizeChart: function () {
                    this.drawTitle();
                    this[this.chartData.chartType]('init');
                },
                /**
                 * @method refreshChart
                 * @description Redraw the Chart when the data is recycled
                 */
                refreshChart: function () {
                    this.clearAxis();
                    this[this.chartData.chartType]('refresh');
                },
                /**
                 * @method clearAxis
                 * @description Remove x and y axis
                 */
                clearAxis: function (){
                    d3.select('#' + this.chartData.selector).selectAll('.axis').remove();
                },
                /**
                 * @method clearCanvas
                 * @description Remove all content from the SVG
                 */
                clearCanvas: function () {
                    d3.select('#' + this.chartData.selector).selectAll('*').remove();
                },
                /**
                 * @method drawTitle
                 * @description Appends the title and subtitle to the chart
                 */
                drawTitle: function () {
                    d3.select('#' + this.chartData.selector)
                        .append('text')
                        .attr('x', this.width / 2)
                        .attr('y', this.titleHeight - this.titleHeight * .1)
                        .style('text-anchor', 'middle')
                        .text(this.chartData.title)
                    
                    d3.select('#' + this.chartData.selector)
                        .append('text')
                        .attr('x', this.width / 2)
                        .attr('y', this.titleHeight - this.titleHeight * .1 + this.subtitleHeight )
                        .style('text-anchor', 'middle')
                        .text(this.chartData.subtitle)
                },
                /**
                 * @method addTooltip
                 * @param {Object} d dataset  
                 * @param {Object} e event x and y coordinates
                 * @description Adds a tooltip to the SVG
                 */
                addTooltip: function (d, e) {
                    d3.select('#' + this.chartData.selector)
                        .append('rect')
                        .attr('x', e.layerX - 5 - 50)
                        .attr('y', e.layerY - 13 - 25)
                        .attr('height', '16px')
                        .attr('width', '80px')
                        .attr('class', 'tt')
                        .attr('fill', 'white');

                    d3.select('#' + this.chartData.selector)
                        .append('text')
                        .attr('x', e.layerX - 50)
                        .attr('y', e.layerY - 25)
                        .attr('class', 'tt')
                        .attr('font-size', '10px')
                        .text(d['dim'] + ':' + d['metric']);
                },
                /**
                 * @method removeTooltip
                 * @param {Object} d dataset  
                 * @description Removes all tooltips from the SVG
                 */
                removeTooltip: function (d) {
                    d3.select('#' + this.chartData.selector)
                        .selectAll('.tt').remove();
                },
                /**
                 * @method barChart
                 * @description Bar chart directive
                 */
                ...((typeof barChart !== 'undefined') && {barChart: barChart}),
                /**
                 * @method vBarChard
                 * @description Verticle Bar chart directive
                 */
                ...((typeof vBarChart !== 'undefined') && {vBarChart: vBarChart}),
                /**
                 * @method scatterPlot
                 * @description Scatter Plot directive
                 */
                ...((typeof scatterPlot !== 'undefined') && {scatterPlot: scatterPlot}),
                /**
                 * @method pieChart
                 * @description Pie chart directive
                 */
                ...((typeof pieChart !== 'undefined') && {pieChart: pieChart}),
                /**
                 * @method areaChart
                 * @description Area chart directive
                 */
                ...((typeof areaChart !== 'undefined') && {areaChart: areaChart}),
                /**
                 * @method lineGraph
                 * @description Line Graph directive
                 */
                ...((typeof lineGraph !== 'undefined') && {lineGraph: lineGraph}),
            },
            computed: {
                /**
                 * @method ds
                 * @description Computed.  
                 * @returns {Object} normalized dataset
                 */                
                ds: function () {
                    return this.chartData.data.map(d => {
                        let td = {};
                        td.metric = this.chartData.metric ? d[this.chartData.metric] : d;
                        td.dim = this.chartData.dim ? d[this.chartData.dim] : null;
                        return td;
                    });
                },
                /**
                 * @method height
                 * @description Computed.  
                 * @returns {number} Chart Height
                 */
                height: function () {
                    return this.chartData.height || 200;
                },
                /**
                 * @method width
                 * @description Computed.  
                 * @returns {number} Chart width
                 */
                width: function () {
                    return this.chartData.width || 200;
                },
                /**
                 * @method max
                 * @description Computed.  
                 * @returns {number} Max value for metric
                 */
                max: function () {
                    let max = 0;
                    this.ds.forEach(function (e) {
                        max = max > e.metric ? max : e.metric;
                    })
                    return max;
                },
                /**
                 * @method min
                 * @description Computed.  
                 * @returns {number} Min value for metric
                 */
                min: function () {
                    return Math.min.apply(Math, this.ds.map(function (o) {
                        return o['metric'];
                    }));
                },
                /**
                 * @method titleHeight
                 * @description Computed.  
                 * @returns {number} Height of the chart title
                 */
                titleHeight: function () {
                    if (this.chartData.title)
                        return this.chartData.textHeight || 25;
                    return 0;
                },
                /**
                 * @method subtitleHeight
                 * @description Computed.  
                 * @returns {number} Height of chart subtitle
                 */
                subtitleHeight: function () {
                    if (this.chartData.subtitle)
                        return this.chartData.textHeight * .66 || 25 * .66;
                    return 0;
                },
                /**
                 * @method header
                 * @description Computed.  
                 * @returns {number} Total header height
                 */
                header: function () {
                    return (this.titleHeight + this.subtitleHeight);
                }

            },
            mounted: function () {
                this.initalizeChart();
            },
            watch: {
                'chartData': {
                    handler: function (val) {
                        this.refreshChart();
                    },
                    deep: true
                }
            },
            template:
                `<svg :id='this.chartData.selector' x='5' y='5' :height='this.height + 20' :width='this.width + 20'> </svg>`
        })
    }
}

export default Chart;

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(Chart)
}

