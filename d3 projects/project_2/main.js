


//d3.csv("movies.csv", (error,data) => {console.log(error,data)});

d3.csv("movies.csv", dataViz);
  function dataViz(data) {
    var xScale = d3.scaleLinear().domain([0, 10]).range([0, 500]);  
    var yScale = d3.scaleLinear().domain([0, 100]).range([500, 0]);  
    var movies = ["titanic", "avatar", "akira", "frozen", "deliverance", "avengers"]

    var fillScale = d3.scaleOrdinal()    
    .domain(movies)    
    .range(["#ffffcc", "#c7e9b4", "#7fcdbb", "#41b6c4", "#2c7fb8", "#253494"])

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
    .on("mouseover", function(d) {
      d3.select(this).style('fill', '#00b2ff'); 
    })
    .attr("d", d => stackArea(d));

    const yAxis = d3.axisRight()   
    .scale(yScale)
    
  
    

    d3.select("svg")
    .append("g")  
    .call(yAxis)
    

    

    

  
  }



  