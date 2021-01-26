const yargs = require('yargs').options({
    direccion: {
        alias: 'd',
        demand: true,
        desc: 'Ingresa el nombre de la ciudad para conocer detalles de su clima'
    }
}).argv;
const laDireccion = yargs.direccion;
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');
// lugar.getVainas(yargs.direccion)
//     .then((respuesta) => {
//         console.log(respuesta.lat, respuesta.lon, respuesta.timezone);

//     })
//     .catch(err => console.log(`Error: Lugar ${yargs.direccion} no encontrado`));
// clima.getClima(respuesta.lat, respuesta.lon)
//     .then(console.log)
//     .catch(console.log);
const consultas = async(laDireccion) => {
    try {
        const coordenadas = await lugar.getVainas(laDireccion);
        const temperatura = await clima.getClima(coordenadas.lat, coordenadas.lon);
        return `La temperatura en ${laDireccion} es de ${temperatura}°C`;

    } catch {
        return `No se pudo determinar la temperatura de ${laDireccion}`;
    }
};
consultas((laDireccion))
    .then((respuesta) => console.log(respuesta));
//yargs.direccion