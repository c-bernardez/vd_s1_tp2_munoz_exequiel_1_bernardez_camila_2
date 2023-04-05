d3.csv('astronautas.csv', d3.autoType).then(data => {
  let dataF = data.filter(d => d.mision_hs >= 6000)

  let chart = Plot.plot({
    marks: [
      Plot.barX(
        dataF,
        {
        x: 'mision_hs',
        y: 'nombre',
        fill: 'nacionalidad',
      }),
      

      Plot.text(dataF, {
        x: d => d.mision_hs + 200, // position the text to the right of the bar
        y: d => d.nombre, // position the text at the center of the bar
        text: d => d3.format('.0f')(d.mision_hs), // set the text to the value of mision_hs
        fill: d => d.nacionalidad, // set the text color based on nacionalidad
        textAnchor: 'start', // align the text to the left of the x position
        fontWeight: 'bold',
        fontSize: 17,
      }),

      Plot.axisX({
        label: null,
        ticks: ([]),
        // ticks: ([0,6000,10000]),
        // tickFormat:'d',
        // fontWeight: '400',
        // fontSize: '15',
        // tickSize:15,
        },
       ),

      Plot.axisY({
        label:null,
        fontWeight: '400',
        fontSize: '17',
        tickSize:0,
        textAnchor: "start",
        dx: 14,
        fill:"white",
      }),
      
    ],
    
    y: {
      domain: d3.sort(dataF, (a, b) => d3.descending(a.mision_hs, b.mision_hs)).map(d => d.nombre),
    },
    // x: {
    //   grid: true,
    //   tickFormat:'d',
    // },
    marginLeft: 0,
    marginTop:30,
    marginRight: 70,
    height:1.2*460,
    width: 1.2*690,
    style: {
      background: "#020C1B",
      color: "#020C1B"},
    nice: true,
    color: {
      range: ['#7149C6'],
      //legend: "ramp",
    },
  
  })
  d3.select('#chart').append(() => chart)
})
