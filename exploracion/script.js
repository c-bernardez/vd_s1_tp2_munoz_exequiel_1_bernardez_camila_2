//ATRIBUTO: ANIO MISION
//MARCA: DOT
d3.csv('astronautas.csv', d3.autoType).then(data => {
  console.log(data)
  // Guardamos el svg generado en la variable chart
  let chart = Plot.plot({
    marks: [
      Plot.dot(data, {
        x: 'anio_mision',
      }),
    ],
  width:1050,
  marginLeft:170,
  grid:true,
  x:{
    tickFormat: 'd',
  }
  })
  
  // Agregamos chart al div#chart de index.html
  d3.select('#chart1').append(() => chart)
})


//ATRIBUTO: ANIO MISION y NACIONALIDAD
//MARCA: DOT
d3.csv('astronautas.csv', d3.autoType).then(data => {
  console.log(data)
  // Guardamos el svg generado en la variable chart
  let chart = Plot.plot({
    marks: [
      Plot.dot(data, {
        x: 'anio_mision',
        y: 'mision_hs'
      }),
    ],
  width:1050,
  marginLeft:170,
  grid:true,
  x:{
    tickFormat: 'd',
  }
  })
  
  // Agregamos chart al div#chart de index.html
  d3.select('#chart2').append(() => chart)
})


//ATRIBUTO: ANIO MISION y NACIONALIDAD + OCUPACION
//MARCA: DOT Y COLOR
d3.csv('astronautas.csv', d3.autoType).then(data => {
  console.log(data)
  // Guardamos el svg generado en la variable chart
  let chart = Plot.plot({
    marks: [
      Plot.dot(data, {
        x: 'anio_mision',
        y: 'mision_hs', 
        fill: 'nacionalidad',
      }),
    ],
  width:1050,
  marginLeft:170,
  grid:true,
  x:{
    tickFormat: 'd',
  }
  })
  
  // Agregamos chart al div#chart de index.html
  d3.select('#chart3').append(() => chart)
})

//ATRIBUTO: ANIO MISION y NACIONALIDAD + OCUPACION
//MARCA: BARRA Y COLOR
d3.csv('astronautas.csv', d3.autoType).then(data => {
  console.log(data)
  // Guardamos el svg generado en la variable chart
  let chart = Plot.plot({
    marks: [
      Plot.barY(data, {
        x: 'anio_mision',
        y: 'mision_hs', 
        fill: 'nacionalidad',
      }),
    ],
  width:1050,
  marginLeft:170,
  grid:true,
  x:{
    tickFormat: 'd',
  }
  })
  
  // Agregamos chart al div#chart de index.html
  d3.select('#chart4').append(() => chart)
})


//-------------------------------------------


//ATRIBUTO: MISION HS
//MARCA: TICK
d3.csv('astronautas.csv', d3.autoType).then(data => {
  console.log(data)
  // Guardamos el svg generado en la variable chart
  let chart = Plot.plot({
    marks: [
      Plot.tickX(data, {
        x: 'mision_hs',
      }),
    ],
  width:1050,
  marginLeft:170,
  grid:true,

  x:{
    tickFormat: 'd',
  }
  })
  
  // Agregamos chart al div#chart de index.html
  d3.select('#chart5').append(() => chart)
})


//ATRIBUTO: MISION HS Y NOMBRE
//MARCA: TICK
d3.csv('astronautas.csv', d3.autoType).then(data => {
  console.log(data)
  // Guardamos el svg generado en la variable chart
  let chart = Plot.plot({
    marks: [
      Plot.tickX(data, {
        x: 'mision_hs',
        y: 'nombre'
      }),
    ],
  width:1050,
  marginLeft:170,
  marginTop:100,
  grid:true,
  x:{
    tickFormat: 'd',
  }
  })
  
  // Agregamos chart al div#chart de index.html
  d3.select('#chart6').append(() => chart)
})


//ATRIBUTO: MISION HS Y NOMBRE + GENERO
//MARCA: TICK + COLOR
d3.csv('astronautas.csv', d3.autoType).then(data => {
  console.log(data)
  // Guardamos el svg generado en la variable chart
  let chart = Plot.plot({
    marks: [
      Plot.tickX(data, {
        x: 'mision_hs',
        y: 'nombre', 
        stroke: 'genero',
      }),
    ],
  width:1050,
  marginLeft:170,
  marginTop:100,
  grid:true,
  x:{
    tickFormat: 'd',
  }
  })
  
  // Agregamos chart al div#chart de index.html
  d3.select('#chart7').append(() => chart)
})

//ATRIBUTO: MISION HS Y NOMBRE + GENERO
//MARCA: TICK + COLOR
d3.csv('astronautas.csv', d3.autoType).then(data => {
  console.log(data)
  // Guardamos el svg generado en la variable chart
  let chart = Plot.plot({
    marks: [
      Plot.barX(data, {
        x: 'mision_hs',
        y: 'nombre', 
        fill: 'genero',
      }),
    ],
  width:1050,
  marginLeft:170,
  marginTop:100,
  grid:true,
  x:{
    tickFormat: 'd',
  }
  })
  
  // Agregamos chart al div#chart de index.html
  d3.select('#chart8').append(() => chart)
})

d3.csv('astronautas.csv', d3.autoType).then(data => {
  let chart = Plot.plot({
    x: {tickFormat:""},
    y: {
      grid:true,
    },
    marks: [
      Plot.barY(data, 
        // x: 'anio_mision',
        // y: 'mision_hs',
        // fill: 'nacionalidad',
        // sort: 'anio_mision',
        
        // usar leyendas
        Plot.groupX(
        {y:"count"},
        {x:"anio_mision", fill:"nacionalidad",title: d => d.nacionalidad,},
        )),
        
        // Plot.groupX({x: "ocupacion"},{
        // y: "mision_hs"},{fill: "genero"},)
        
        //opacity: 0.7,
      
      //Plot.ruleY([0]),

      Plot.axisX({
          label: "Años de misión",
          anchor: "bottom",
          tickFormat:'d',
      }),
      Plot.axisY({
          label: "Cantidad de astronautas",
          anchor: "left",
          tickFormat:'d',
      }),
    ],
    nice:true,
    color:{
      legend: true,
      range: ["#ff355e","#fd5b78","#ff6037","#ff9933","#ffcc33","#ff9966","#ffff66","#ccff00",
      "#66ff66",
      "#aaf0d1",
      "#16d0cb",
      "#50bfe6",
      "#9c27b0"
    ]
    },
    line:true,
    marginLeft: 70,
    width: 800,
    height: 600,
    
  })
  d3.select('#chart9').append(() => chart)
})


//-------------------------


d3.csv('astronautas.csv', d3.autoType).then(data => {
  
  let dataF = data.filter(d => d.mision_hs >= 6000);
  // Guardamos el svg generado en la variable chart
  let chart = Plot.plot({
    marks: [
      Plot.barX(dataF, {
        x: 'mision_hs',
        y: 'nombre', 
        fill: 'nacionalidad',
      }),

      
        
      Plot.axisX({
          label: "Horas de misión",
          anchor: "bottom",
          ticks:([0,2500,5000,7500,10000]),
          tickFormat:'d',
      }),
      Plot.axisY({
          label:null,
          fontWeight: '400',
          fontSize: '17',
          tickSize:0,
          textAnchor: "start",
          dx: 12,
          fill:"white",
          
      }),
    ],
  width:1050,
  marginLeft:20,
 
  
  color:{
      legend: true,
      range: ["#ffcc33",
      "#66ff66",
      "#9c27b0"
    ]
    },
    y: {
      domain: d3.sort(dataF, (a, b) => d3.descending(a.mision_hs, b.mision_hs)).map(d => d.nombre),
    },
  })
  
  // Agregamos chart al div#chart de index.html
  d3.select('#chart10').append(() => chart)
})

d3.csv('astronautas.csv', d3.autoType).then(data => {
  let dataF = data.filter(d => d.nacionalidad =="EE.UU." || d.nacionalidad == "U.S.S.R/Rusia");
  let chart = Plot.plot({
   
    x: {tickFormat:""},
    y: {
      grid:true,
    },
    marks: [
      Plot.barY(dataF, 
        // x: 'anio_mision',
        // y: 'mision_hs',
        // fill: 'nacionalidad',
        // sort: 'anio_mision',
        
        // usar leyendas
        Plot.groupX(
        {y:"count"},
        {x:"anio_mision", fill:"nacionalidad",title: d => d.nacionalidad,},
        )),
        
        // Plot.groupX({x: "ocupacion"},{
        // y: "mision_hs"},{fill: "genero"},)
        
        //opacity: 0.7,
      
      //Plot.ruleY([0]),
      Plot.text(["Rusia"],{
          x:2012,
          y:24,
          
          fill: "#9c27b0",
          textAnchor: '',
          fontWeight: 'bold',
          fontSize: 15,
        }),
        Plot.text(["EEUU"],{
          x:2012,
          y:18,
          
          fill: "#ffcc33",
          //textAnchor: 'middle',
          fontWeight: 'bold',
          fontSize: 15,
        }),
      Plot.axisX({
          label: "Años de misión",
          anchor: "bottom",
          tickFormat:'d',
      }),
      Plot.axisY({
          label: "Cantidad de astronautas",
          anchor: "left",
          tickFormat:'d',
      }),
    ],
    nice:true,
    color:{
      //legend: true,
      range: ["#ffcc33","#9c27b0"      ]
    },
    line:true,
    marginLeft: 70,
    width: 800,
    height: 600,
    
  })
  d3.select('#chart11').append(() => chart)
})

d3.csv('astronautas.csv', d3.autoType).then(data => {



  let chart = Plot.plot({
    marks: [
      Plot.line(data, Plot.groupX(
        {y:'count'},
        {x:d => d.anio_mision, stroke: d => d.status,
        // filter: (d) => d.nacionalidad != "Dinamarca",
        strokeWidth: 5,
        opacity: 0.9,
        },
        )),        
        
        Plot.text(["civil"],{
          x:2019+0.1,
          y:3,
          
          fill: "#ff6037",
          textAnchor: 'start',
          fontWeight: 'bold',
          fontSize: 20,
        }),

        Plot.text(["militar"],{
          x:2019+0.1,
          y:7,
          
          fill: "#50bfe6",
          textAnchor: 'start',
          fontWeight: 'bold',
          fontSize: 20,
        }),

        //Plot.ruleX([0]),

        // Plot.ruleX([2010], {stroke: "black", strokeWidth: 1, }),
  
      Plot.axisX({
          label: "Años de misión",
          anchor: "bottom",
          tickFormat:'d',
          ticks:([2010,2015,2019]),
      }),
      Plot.axisY({
          label: "Cantidad de astronautas",
          anchor: "left",
          tickFormat:'d',
      }),

      
    ],
    y:{grid:true,},
    marginLeft: 70,
    marginTop:70,
    marginRight:100,
    marginBottom: 70,
    height:1.2*460,
    width: 1.2*690,
    color: {
      //range: ['hsl(240,85%,60%)','hsl(0, 85%, 50%)',]
      range:["#ff6037",
      "#50bfe6",],
      //legend:true,
    },
  })

  d3.select('#chart12').append(() => chart)
})


