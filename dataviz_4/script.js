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

        Plot.dot(data.filter(d=>d.anio_mision == "2011" || d.anio_mision=="2015" || d.anio_mision=="2019"), Plot.groupX(
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
          
          fill: '#D27685',
          textAnchor: 'start',
          fontWeight: 'bold',
          fontSize: 20,
        }),

        Plot.text(["militar"],{
          x:2019+0.1,
          y:7,
          
          fill: '#B2A4FF',
          textAnchor: 'start',
          fontWeight: 'bold',
          fontSize: 20,
        }),

        Plot.text(["20"],{
          x:2011,
          y:20+0.7,
          
          fill: '#B2A4FF',
          textAnchor: 'middle',
          fontWeight: 'bold',
          fontSize: 15,
        }),

        Plot.text(["7"],{
          x:2011+.05,
          y:7+1.7,
          
          fill: '#D27685',
          textAnchor: 'middle',
          fontWeight: 'bold',
          fontSize: 15,
        }),

        Plot.text(["9"],{
          x:2015,
          y:9+1.7,
          
          fill: '#B2A4FF',
          textAnchor: 'middle',
          fontWeight: 'bold',
          fontSize: 15,
        }),

        Plot.text(["1"],{
          x:2015,
          y:1+1.8,
          
          fill: '#D27685',
          textAnchor: 'middle',
          fontWeight: 'bold',
          fontSize: 15,
        }),

        Plot.ruleY([0], {stroke: "white", strokeWidth: 1}),
        //Plot.ruleX([0]),

        // Plot.ruleX([2010], {stroke: "black", strokeWidth: 1, }),
  
        Plot.axisX({
          label: null, 
          //lineWidth:10,
          //marginBottom: 40, 
          //dy:10,
          fontWeight: 'medium',
          fontSize: '15',
          tickFormat: 'd',
          ticks: ([2011,2015,2019]),
          fill:'white',
          stroke: 'white',
          tickSize:20,
        },
          
         ),

         Plot.axisY({
          label:null,
          //lineWidth:1,
          ticks: ([0,10,20]),
          //ticks: ([]),
          fontWeight: 'medium',
          fill:'white',
          stroke: 'white',
          fontSize: '15',
          tickSize:20,
          grid:true,
        }),

      
    ],
    style: {
      background: "#020C1B",
      color: "#020C1B"},
    y:{grid:true,},
    marginLeft: 70,
    marginTop:80,
    marginRight:100,
    marginBottom: 80,
    height:1.4*460,
    width: 1.2*690,
    color: {
      //range: ['hsl(240,85%,60%)','hsl(0, 85%, 50%)',]
      range:['#D27685','#B2A4FF'],
      //legend:true,
    },
  })

  d3.select('#chart').append(() => chart)
})


