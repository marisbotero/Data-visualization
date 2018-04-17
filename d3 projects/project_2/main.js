


//d3.csv("movies.csv", (error,data) => {console.log(error,data)});

d3.csv("movies.csv", dataViz);
  function dataViz(data) {
    var xScale = d3.scaleLinear().domain([0, 10]).range([0, 500]);  
    var yScale = d3.scaleLinear().domain([0, 100]).range([500, 0]);  
    var movies = ["titanic", "avatar", "akira", "frozen", "deliverance", "avengers"]

    var fillScale = d3.scaleOrdinal()    
    .domain(movies)    
    .range(["aqua", "blueviolet", "yellowgreen", "royalblue", "orange", "violet"])

    stackLayout = d3.stack()     
    .keys(movies)    
  
    var stackArea = d3.area()
    .x((d, i) => xScale(i))
    .y0(d => yScale(d[0]))
    .y1(d => yScale(d[1]))
    .curve(d3.curveBasis);  


    d3.select("svg")
    .selectAll("path")
    .data(stackLayout(data))
    .enter().append("path")
    .style("fill", d => fillScale(d.key))  
    .attr("stroke", "black")
    .attr("d", d => stackArea(d));

    


  
  }

  