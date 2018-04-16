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
      let limit = $( ".limit" ).val();
      let strokeCol = $( ".stroke-col" ).val();
      draw(x1, x2, y1, y2, iterator, limit, strokeCol)
  })

  // $('.data_form_bg').submit(function(event) {
  //     event.preventDefault()
  //     let bgCol = $( ".bg-col" ).val();
  //     changeBackground(bgCol)
  // })

  let draw = function(x1, x2, y1, y2, iterator, limit, strokeCol) {
    for (let i = 2;i < (parseInt(limit));) {
    canvas.append("line")
      .attr('x1', (parseInt(x1) + i))
      .attr('y1', (parseInt(y2)))
      .attr('x2', (parseInt(x2)))
      .attr('y2', (parseInt(y2) + i))
      .style('stroke', strokeCol)
      i += (parseInt(iterator))
    }
  }

  // let changeBackground = function(bgCol) {
  //   var chart = canvas.append("canvas")
  //     .attr("fill", "pink");
  //
  // }


})
