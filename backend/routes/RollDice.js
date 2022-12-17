const axios = require("axios");

const GetDice = {
    method: 'GET',
    url: 'https://roll-the-dice.p.rapidapi.com/',
    params: {count: '2'},
    headers: {
        'X-RapidAPI-Key': '701b4d9889msh8db275bcb0a1d92p15c4c5jsn15120d91e9c5',
        'X-RapidAPI-Host': 'roll-the-dice.p.rapidapi.com'
    }
};

axios.request(GetDice).then(function (response) {
    console.log(response.data);
}).catch(function (error) {
    console.error(error);
});