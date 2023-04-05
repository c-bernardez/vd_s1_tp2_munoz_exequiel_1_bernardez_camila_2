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
            {x: "anio_mision",dy:-230,fontSize:14,dx:8,fontWeight:'bold',fill:"genero"
            }
            )),  
            ),
      Plot.text(data.filter(d => d.genero == 'masculino' && d.anio_mision == 2016), 
      Plot.stackY(
        Plot.groupX(
          {y:"count", text:"count"},
          {x: "anio_mision",dy:-110,fontSize:14,fontWeight:'bold',fill:"genero"
          }
          )),  
          ),
      Plot.text(data.filter(d => d.genero == 'femenino'&& d.anio_mision == 2010), 
      Plot.stackY(
        Plot.groupX(
          {y:"count", text:"count",},
          {x: "anio_mision", dy:-45,fontSize:14, fontWeight:'bold',dx:5,fill:"genero"
          }
          ))),
      Plot.text(data.filter(d => d.genero == 'femenino'&& d.anio_mision == 2016), 
      Plot.stackY(
        Plot.groupX(
          {y:"count", text:"count",},
          {x: "anio_mision",dy: -20,fontSize:14,fontWeight:'bold',fill:"genero"
          }
          ))),
      
    ],
    x: {
      tickFormat: 'd',
      ticks: ([2010,2013,2016,2019]),
      line: false,
      label: null,
    },
    y:{
      axis: null,
      tickSize: 0,
      label:null,
    },
    marginLeft: 70,
    marginTop:70,
    //line: true,
    color: {
      //legend: true,
      //range: ['hsl(300,85%,60%)','hsl(240,85%,60%)'],
      range:['#D27685','#37306B']
      //scheme: 'Turbo',
    },
  })

  d3.select('#chart').append(() => chart)
})

