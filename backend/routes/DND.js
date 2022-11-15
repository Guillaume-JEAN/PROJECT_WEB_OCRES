const express = require('express');
const axios = require('axios');
// Lodash utils library
const _ = require('lodash');

const router = express.Router();

const options = {
    method: 'GET',
    url: 'https://dungeons-and-dragon-5e.p.rapidapi.com/background/urchin',
    headers: {
        'X-RapidAPI-Key': 'e3bc8490f7mshcdd642d0348fdf5p1775c9jsn58ce353a8426',
        'X-RapidAPI-Host': 'dungeons-and-dragon-5e.p.rapidapi.com'
    }
};

axios.request(options).then(function (response) {
    console.log(response.data);
}).catch(function (error) {
    console.error(error);
});