const axios = require('axios');

const getVainas = async(direccion) => {

    const encodedURL = encodeURI(direccion);

    const instance = axios.create({
        baseURL: `https://community-open-weather-map.p.rapidapi.com/weather?q=${direccion}`,
        headers: { 'x-rapidapi-key': 'f81124fd0cmsh7b302aa5c9e1da6p1675fbjsn36faf8570ef4' }
    });

    const datos = await instance.get();

    //    console.log(datos.status);

    if (datos.isAxiosError === true) {
        throw Error(`Error en la consulta del lugar ${direccion}`);
    }
    const lon = datos.data.coord.lon;
    const lat = datos.data.coord.lat;
    const timezone = datos.data.timezone;


    return {
        lon,
        lat,
        timezone
    }


}

module.exports = {
    getVainas
}