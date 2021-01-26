const axios = require('axios');


const getClima = async(lat, long) => {

    const instance = axios.create({
        baseURL: `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=b37efd8ec901462c334b578dcdae0e08&units=metric`
    });

    const datos = await instance.get();
    //console.log(datos);
    return datos.data.main.temp;
}

module.exports = {
    getClima
}