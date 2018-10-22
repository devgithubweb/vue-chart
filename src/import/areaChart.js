var d3 = Object.assign({},
    require('d3-selection'),
    require('d3-scale'),
    require('d3-axis'),
    require('d3-shape')
);
/**
 * Builds an Area Chart.
 * @constructor
 * @param {String} mode (init / refresh)
 * @exports areaChart
 */
var areaChart = function (mode) {
    let svgContainer = d3.select('#' + this.chartData.selector),
        ds = this.ds,
        cs = {
            pallette: {
                stroke: '#d1f4fa',
                fill: '#005792'
            },
            x: {
                domain: [],
                range: [],
                axisHeight: 45,
                axisWidth: 45
            }, y: {
                axisWidth: 45
            }
        };

    /**
     * @method _enter
     * @param {Object} poly (svg element)
     * @description Runs when a new element is added to the dataset
     */
    var _enter = poly => {
        poly.enter()
            .append('polygon')
            .attr('stroke', cs.pallette.stroke)
            .attr('fill', cs.pallette.fill)
            .attr('points', getPoints);
    };
    /**
     * @method _transition
     * @param {Object} poly (svg element)
     * @description Runs when a value of an element in dataset is changed
     */
    var _transition = poly => {
        poly.transition()
            .attr('points', getPoints);
    };
    /**
     * @method _exit
     * @param {Object} poly (svg element)
     * @description Runs when an element is removed from the dataset
     */
    var _exit = poly => {
        poly.exit().remove();
        return poly;
    };
    /**
     * @method _buildScales
     * @param {Object} cs coordinate system configuraton
     * @description builds the scales for the x and y axis
     */
    var _buildScales = cs => {
        cs.y.scale = d3.scaleLinear()
            .domain([0, this.max])
            .range([this.height - cs.x.axisHeight, this.titleHeight])
        cs.y.axis = d3.axisLeft().ticks(10, 's').scale(cs.y.scale)
        ds.forEach(t => cs.x.domain.push(t['dim']));
        ds.forEach((t, i) => cs.x.range.push((((this.width - cs.x.axisWidth) * i)) / ds.length));
        cs.x.scale = d3.scaleOrdinal().domain(cs.x.domain).range(cs.x.range);
        cs.x.axis = d3.axisBottom().scale(cs.x.scale);
        return cs;
    };
    /**
     * @method _drawAxis
     * @param {Object} cs coordinate system configuraton
     * @description draws the x and y axis on the svg
     */
    var _drawAxis = cs => {
        cs.polyFunction = d3.line()
            .x((d, i) => cs.x.scale(d['dim']) + cs.y.axisWidth + 5)
            .y(d => cs.y.scale(d['metric']))
        cs.x.xOffset = cs.y.axisWidth + 5;
        cs.x.yOffset = this.height - cs.x.axisHeight;
        cs.y.xOffset = cs.y.axisWidth;
        cs.y.yOffset = 0;
        svgContainer.append('g').append('g').attr('class', 'axis').attr('transform', 'translate(' + cs.x.xOffset + ', ' + cs.x.yOffset + ')').call(cs.x.axis);
        svgContainer.append('g').append('g').attr('class', 'axis').attr('transform', 'translate(' + cs.y.xOffset + ',' + cs.y.yOffset + ')').call(cs.y.axis);
        return cs;
    };

    /**
     * 
     * Helper Functions 
     */
    var getPoints = d => {
        let poly = d.map(function (d) {
            return [cs.x.scale(d['dim']) + cs.y.axisWidth + 5, cs.y.scale(d['metric'])].join(',');
        }).join(' ');
        poly += (' ' + this.width + ', ' + cs.x.yOffset + ' ')
        poly += (' ' + cs.x.axisHeight + ', ' + cs.x.yOffset + ' ')
        return poly;
    }

    let poly = svgContainer.selectAll('polygon').data([ds])

    _buildScales(cs);
    _drawAxis(cs);
    _enter(poly);
    _transition(poly);
    _exit(poly);
};

export default areaChart;