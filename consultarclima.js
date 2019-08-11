export class consultarclima {
  constructor(ciudad){
    this.key='5b2cba3336d6c337ec54d7f9499a4c45';
    this.ciudad = ciudad;
  }

  async getconsultaclima(){
    const URI = 'http://api.openweathermap.org/data/2.5/weather?q=$(this.ciudad)&appid=$(this.key)';
    const data = await fetch(URI);
    return data;
  }
}
