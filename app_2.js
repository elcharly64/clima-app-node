//este funciona y lo guardo antes de optimizarlo y expandir su 
//funcionalidad con async y la lógica en otro archivo

const axios = require('axios');

const yargs = require('yargs').options({
    direccion: {
        alias: 'd',
        demand: true,
        desc: 'Ingresa el nombre de la ciudad para conocer detalles de su clima'
    }
}).argv;


const encodedURL = encodeURI(yargs.direccion);
console.log(encodedURL);

const instance = axios.create({
    baseURL: `https://community-open-weather-map.p.rapidapi.com/weather?q=${yargs.direccion}`,
    timeout: 1000,
    headers: { 'x-rapidapi-key': 'f81124fd0cmsh7b302aa5c9e1da6p1675fbjsn36faf8570ef4' }
});

instance.get()
    .then(respuesta => {
        console.log(respuesta.data);
    })
    .catch(error => {
        console.log("Error:", error);
    });