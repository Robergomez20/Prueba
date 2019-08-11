
/*const {consultarclima} = require('consultarclima');

const clima = new consultarclima('Bogota');


async function fetconsultaclima(){
  const data = await consultarclima.getconsultarclima();
  console.log(data);
}
document.addEventListener('DOMContentLoaded', consultarclima);
*/
$("#consultar").click(function(){

  var url = 'http://api.openweathermap.org/data/2.5/weather?q='+$("#ciudad").val()+'&appid=5b2cba3336d6c337ec54d7f9499a4c45&units=metric';

  $.ajax({
  url: url,
  dataType: 'json',
  success: function( response ) {
    //console.log(response);
      $("#tempClima").text(response.main.temp);
      $("#pronosticoClima").text(response.weather[0].description);
      $("#imgPronostico").prop("src",'http://openweathermap.org/img/wn/'+response.weather[0].icon+'@2x.png')
      ConsultarClima5Dias();
    },
    error: function( data ) {
      alert( "ERROR:  " + data );
    }
  });

});

function ConsultarClima5Dias(){

  var url = 'http://api.openweathermap.org/data/2.5/forecast/daily?q='+$("#ciudad").val()+'&mode=json&units=metric&cnt=5&appid=5b2cba3336d6c337ec54d7f9499a4c45';

  $.ajax({
  url: url,
  dataType: 'json',
  success: function( response ) {
    console.log(response);

    response.list.forEach( function(valor, indice, array) {
        console.log("En el índice " + indice + " hay este valor: " + valor);
    });

  },
  error: function( data ) {
    console.log(data.responseJSON);
  }
});


}
