// start slingin' some d3 here.
//
// //enter:

//d3.select('div').data([1,2,3]).enter().append("div").text(function(d){return d;});

// update:
//

//d3.selectAll('div').text(function(d){return d;});

// d3.selectAll("li").data(["red", "green", "blue", "purple"]).text(function(d){return d;});
// d3.selectAll("ul").append("li").enter().text(function(d){return d;});
// var matrix = [
//   [11975,  5871, 8916, 2868],
//   [ 1951, 10048, 2060, 6171],
//   [ 8010, 16145, 8090, 8045],
//   [ 1013,   990,  940, 6907]
// ];

// var tableRows = d3.select("body").append("table").selectAll("tr")
//     .data(matrix)
//   .enter().append("tr");

// var td = tableRows.selectAll("td")
//     .data(function(d) { return d; })
//   .enter().append("td")
//     .text(function(d) { return d; });

// var lists =
// ["red", "green"];

// var ol = d3.select("body").selectAll("ol")
//             .data(lists).enter().append("ol");
// var li = ol.selectAll("li")
//          .data(function(d){return d;})
//          .enter().append("li").text(function(d){return d;});

// <ol data = "red"></ol>
//  <li>r</li>
//  <li data = e>
//  <li data = d>
// <ol data = "green"></ol>
// <ol data = "blue"></ol>

// select(something).data(data).enter().[append, insert, select, call]



d3.select("body").selectAll("div")
    .data([4, 8, 15, 16, 23, 42])
  .enter().append("div")
    .text(function(d) { return d; });
