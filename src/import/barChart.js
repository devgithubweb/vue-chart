var d3 = Object.assign({}, 
    require("d3-selection"),
    require("d3-scale"),
    require("d3-axis")
);

var drawChart = function () {
    let xScale = d3.scaleLinear()
        .domain([0, this.getMax()])
        .range([0, this.getWidth()]);
    
    let svgContainer = d3.select("." + this.chartData.selector);

    svgContainer.append("text")
        .attr("x", this.getWidth() / 2)
        .attr("y", this.getTitleHeight() - this.getTitleHeight() * .1)
        .style("text-anchor", "middle")
        .text(this.chartData.title)

    svgContainer.selectAll("g")
        .data(this.chartData.data)
        .enter().append("g")
        .append("rect")
        .attr("class", this.barChartSelector)
        .attr("width", d => {
            return xScale(d) ;
        }).attr("height", (d, i) => {
            return (this.getHeight() - this.getTitleHeight() - 21) / this.chartData.data.length - 1
        }).attr("y",  (d, i) => {
            return i * (this.getHeight() - this.getTitleHeight()- 21 ) / this.chartData.data.length + 1 + this.getTitleHeight();
        }).attr("x", 0);

    let xAxis = d3.axisBottom().scale(xScale);
    let xAxisCoord = this.getHeight() - 20;
    svgContainer.append("g").attr("transform", "translate(0, " + xAxisCoord + ")").call(xAxis);
};

export default drawChart;