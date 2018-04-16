$(document).ready(() => {
  const canvas = d3.select(".main")
    .append("svg")
    .attr("width", "100%")
    .attr("height", "100%")
    .attr('class', 'svg')

  $('.data_form').submit(function(event) {
      event.preventDefault()
      let x1 = $( ".x1" ).val();
      let x2 = $( ".x2" ).val();
      let y1 = $( ".y1" ).val();
      let y2 = $( ".y2" ).val();
      let iterator = $( ".iterator" ).val();
      draw(x1, x2, y1, y2, iterator)
  })

  let draw = function(x1, x2, y1, y2, iterator) {
    var i = iterator;
    for (;i < 700;) {
    canvas.append("line")
      .attr('x1', x1)
      .attr('y1', y1)
      .attr('x2', x2 + iterator)
      .attr('y2', y2)
      .style('stroke', '#3e3330')
      i += iterator
    }
  }

})
