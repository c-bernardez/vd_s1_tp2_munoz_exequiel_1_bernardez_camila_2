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
        fill: d => d[1][0].nacionalidad === "EE.UU." ? "#D27685" : "#37306B",
        textAnchor: 'middle',
        fontWeight: 'bold',
        fontSize: 15,
      }),
      
      Plot.text(rus, {
        x: d => d[0],
        y: d => -2*(d[1].length)-2.8,
        text: d => d[1].length,
        fill: d => d[1][0].nacionalidad === "EE.UU." ? "#D27685" : "#37306B",
        textAnchor: 'middle',
        fontWeight: 'bold',
        fontSize: 13,
      }),

      Plot.text(data, {
        x: d => d.anio_mision,
        y: 0,
        text: d => yearFormat(d.anio_mision),
        fill: 'black',
        textAnchor: 'middle',
        fontWeight: '150',
        fontSize: 12,
      }),


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
    marginLeft: 70,
    marginTop:70,
    marginBottom: 70,
    height:1.2*460,
    width: 1.2*690,
    color: {
      //range: ['hsl(240,85%,60%)','hsl(0, 85%, 50%)',]
      range:['#D27685','#37306B']
    },
  })

  d3.select('#chart').append(() => chart)
})


