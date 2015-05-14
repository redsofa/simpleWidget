function SimpleVis(iSvg)
{
    this.svg = iSvg;
}

SimpleVis.prototype.draw = function()
{
    var sRef = this;

    sRef.svg.append("rect")
        .style("stroke", "gray")
        .style("fill", "white")
        .attr("x", 10)
        .attr("y", 10)
        .attr("width", 50)
        .attr("height", 50)
        .on("mouseover", function(){d3.select(this).style("fill", "aliceblue");})
        .on("mouseout", function(){d3.select(this).style("fill", "white");})
        .on("mousedown", animateFirstStep);

    function animateFirstStep(){
        d3.select(this)
            .transition()
            .delay(0)
            .duration(1000)
            .attr("width", 10)
            .each("end", animateSecondStep);
    };

    function animateSecondStep(){
        d3.select(this)
            .transition()
            .duration(1000)
            .attr("width", 50);
    };
};