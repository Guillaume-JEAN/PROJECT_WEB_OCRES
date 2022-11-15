const axios = require("axios");

const options = {
    method: 'GET',
    url: 'https://dragonzy-tabletop-game-dice.p.rapidapi.com/d20',
    headers: {
        'X-RapidAPI-Key': 'e3bc8490f7mshcdd642d0348fdf5p1775c9jsn58ce353a8426',
        'X-RapidAPI-Host': 'dragonzy-tabletop-game-dice.p.rapidapi.com'
    }
};

axios.request(options).then(function (response) {
    console.log(response.data);
}).catch(function (error) {
    console.error(error);
});