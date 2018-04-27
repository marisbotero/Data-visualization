console.log("Aqui da comienzo mi visualización");


// Cargamos los datos que están en json
// SI fuese otro formate (como csv) usaríamos d3.csv
d3.json("https://gist.githubusercontent.com/double-thinker/817b155fd4fa5fc865f7b32007bd8744/raw/13068b32f82cc690fb352f405c69c156529ca464/partidos2.json").then(function(datos) {
    
    
    console.log("Los datos ya han llegado")
    // Callback de datos recibidos
    
    // Hacer accesible los datos desde "fuera de la función"
    // NO se recomienda, lo hacemos en clase para que podáis ver los datos fácilmente cuando queráis.
    window.datos = datos;
    
    // Guardar los datos de partido en una variable
    // Podría no hacerse, pero así nos evitamos escribir "datos.partidos" todo el rato
    var partidos = datos.partidos;
    
    
    // CONTENEDOR
    // Se puede hacer de dos maneras:
    // 1. Creando el contenedor en el HTML y usando d3.select
    // para cogerlo con su id (hay que poner un id en el html también)
    
    // var container = d3.select("#container")
    
    // 2. EL HTML está vacío (o no tiene el SVG al menos)
    // y lo creamos nosotros con javascript:
    
    var container = d3.select("body")
        .append("svg")
        .attr("width", 500)
        .attr("height", 500)
    

    // Crear escala de las X
    var xScale = d3.scaleLinear()
        .domain([1, 10]) // no uso extent porque la mediaAutoubicacion por definición de la encuesta va de 1 a 10
        .range([0, 500]); // porque es el ancho de la grafica
    
    // Crear escala de las Y
    var yScale = d3.scaleLinear()
        // Este dominio SIEMPRE empieza en 0, desde el punto de vista de diseño
        // hemos decidido que es relevante que se vea el espacio que hay desde el 0 hasta el partido menos votado
        // Pero el maximo si se calcula en base a los datos
        .domain([0, d3.max(partidos, d => d.votantes)])
        .range([500, 0]);
    
    // Crear escala de tamanio
    var sizeScale = d3.scaleLinear()
        .domain([0, d3.max(partidos, d => d.votantes)])
        .range([3, 12]);
    
    
    // Creamos la escala de color
    var colorScale = d3.scaleLinear()
        .domain([1, 5, 10])
        .range(["red", "grey", "blue"]);
    
    // Data joining, binding
    container
        .selectAll("circle") // selección vacía
        .data(partidos)
        .enter()
        .append("circle")
        //.attr("r", 10)
        //.attr("cx", function(d) { return(d.mediaAutoubicacion) })
        .attr("cx", d => xScale(d.mediaAutoubicacion))
        .attr("cy", d => yScale(d.votantes))
        .attr("r", d => sizeScale(d.votantes))
        .attr("fill", d => colorScale(d.mediaAutoubicacion))
    
})