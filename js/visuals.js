$(document).ready(() => {
  const canvas = d3.select(".main")
    .append("svg")
    .attr("width", "100%")
    .attr("height", "100%")
    .attr('class', 'svg')


  var i = 20;
  for (;i < 700;) {
  canvas.append("line")
    .attr('x1', 20)
    .attr('y1', 20)
    .attr('x2', 90)
    .attr('y2', i)
    .style('stroke', '#3e3330')
    i += 20
  }
})
