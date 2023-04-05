d3.csv('astronautas.csv', d3.autoType).then(data => {
  let usa = d3.group(data.filter(d => d.nacionalidad == "EE.UU."), d=> d.anio_mision )
  let rus = d3.group(data.filter(d => d.nacionalidad == "U.S.S.R/Rusia"), d => d.anio_mision)

  let yearFormat = d3.format("d");
  
  let chart = Plot.plot({
    marks: [
      Plot.dot(data.filter(d=>d.nacionalidad === "U.S.S.R/Rusia" || d.nacionalidad === "EE.UU."),
      Plot.stackY2(
        {x: d => d.anio_mision,
        r:5,
        fill: d=> d.nacionalidad,
        y: d=>d.nacionalidad === "EE.UU." ? 2 : -2, },
        
      )
      ),

      Plot.text(usa, {
        x: d => d[0],
        y: d => 2*(d[1].length)+2.8,
        text: d => d[1].length,
        fill: d => d[1][0].nacionalidad === "EE.UU." ? "#D27685" : "#B2A4FF",
        textAnchor: 'middle',
        fontWeight: 'bold',
        fontSize: 20,
      }),
      
      Plot.text(rus, {
        x: d => d[0],
        y: d => -2*(d[1].length)-2.8,
        text: d => d[1].length,
        fill: d => d[1][0].nacionalidad === "EE.UU." ? "#D27685" : "#B2A4FF",
        textAnchor: 'middle',
        fontWeight: 'bold',
        fontSize: 20,
      }),

      Plot.text(data, {
        x: d => d.anio_mision,
        y: 0,
        text: d => yearFormat(d.anio_mision),
        fill: 'white',
        textAnchor: 'middle',
        fontWeight: '150',
        fontSize: 15,
      }),

      // Plot.text(["Cantidad de astronautas por año"], {
      //   x: 2010-0.2,
      //   y: 48,
      //   fill: 'white',
      //   textAnchor: 'start',
      //   fontWeight: '150',
      //   fontSize: 20,
      // }),


      // Plot.ruleY([0], {
      //   stroke: "black", strokeWidth: 1,strokeDasharray: "100 40",
      // }),
      
      Plot.axisX({
        tickFormat: 'd',
        marginBottom:50,
        ticks: ([]),
        //ticks: ([]),
        //anchor: "top",
        
      }),
      Plot.axisY({
        ticks: ([]),
        tickSize: 0,
        anchor: "left",
      }),

    ],
    // x: {
    //   tickFormat: 'd',
    //   label: null,
    //   tickSize: 0,
    //   axis: null
    // },
    // y:{
    //   label: null,
    //   axis: null
    // },
    style: {
      background: "#020C1B",
      color: "#020C1B"},
    height:30,
    marginLeft: 50,
    marginRight:35,
    marginTop:70,
    marginBottom: 70,
    height:1.2*460,
    width: 1.2*690,
    color: {
      //range: ['hsl(240,85%,60%)','hsl(0, 85%, 50%)',]
      range:['#D27685','#B2A4FF']
    },
  })

  d3.select('#chart').append(() => chart)
})


