d3.csv('astronautas.csv', d3.autoType).then(data => {
  let chart = Plot.plot({
    marks: [
      
      Plot.areaY(data, 
        Plot.stackY(
          Plot.groupX(
            {y:"count"},
            {x: "anio_mision", fill: "genero", fillOpacity:1}
            ))),

      Plot.text(data.filter(d => d.genero == 'masculino' && d.anio_mision == 2010), 
        Plot.stackY(
          Plot.groupX(
            {y:"count", text:"count", },
            {x: "anio_mision",dy:-238,fontSize:14,dx:8,fontWeight:'bold',fill:"genero"
            }
            )),  
            ),
      Plot.text(data.filter(d => d.genero == 'masculino' && d.anio_mision == 2016), 
      Plot.stackY(
        Plot.groupX(
          {y:"count", text:"count"},
          {x: "anio_mision",dy:-112,fontSize:14,fontWeight:'bold',fill:"genero"
          }
          )),  
          ),
      Plot.text(data.filter(d => d.genero == 'femenino'&& d.anio_mision == 2010), 
      Plot.stackY(
        Plot.groupX(
          {y:"count", text:"count",},
          {x: "anio_mision", dy:-54,fontSize:14, fontWeight:'bold',dx:5,fill:"genero"
          }
          ))),
      Plot.text(data.filter(d => d.genero == 'femenino'&& d.anio_mision == 2016), 
      Plot.stackY(
        Plot.groupX(
          {y:"count", text:"count"},
          {x: "anio_mision",dy: "-27",fontSize:14,fontWeight:'bold',fill:"genero"
          }
          ))),
      
      Plot.ruleY([0],{stroke:"white"}),
          
      Plot.axisX({
        label: null, 
        //lineWidth:10,
        marginBottom: 40, 
        //dy:10,
        fontWeight: 'medium',
        fontSize: '12',
        tickFormat: 'd',
        tickStroke: 'white',
        ticks: ([2010,2013,2016,2019]),
        fill:'white',
        tickSize:20}),
    ],
    style: {
      background: "#020C1B",
      color: "#020C1B"},
    
    y:{
      axis: null,
      tickSize: 0,
      label:null,
    },
    marginLeft: 60,
    // marginRight: 10,
    marginTop:30,
    
    //line: true,
    color: {
      //legend: true,
      //range: ['hsl(300,85%,60%)','hsl(240,85%,60%)'],
      range:['#F3E8FF','#7149C6']
      //scheme: 'Turbo',
    },
  })

  d3.select('#chart').append(() => chart)
})

