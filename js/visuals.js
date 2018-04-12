$(document).ready(() => {
  const canvas = d3.select(".main")
    .append("svg")
    .attr("width", "100%")
    .attr("height", "100%")


  canvas.append("line")
    .attr('x1', 0)
    .attr('y1', 0)
    .attr('x2', 200)
    .attr('y2', 200)
    .style('stroke', 'red')
})
