
const {consultarclima} = require('consultarclima');

const clima = new consultarclima('Bogota');


async function fetconsultaclima(){
  const data = await consultarclima.getconsultarclima();
  console.log(data);
}
document.addEventListener('DOMContentLoaded', consultarclima);
