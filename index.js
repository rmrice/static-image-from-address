'use strict';


const axios = require('axios');
const API_URL = 'http://api.mapbox.com';

const address = process.argv[process.argv.indexOf('--address') + 1];
const token = process.env.MAPBOX_ACCESS_TOKEN;
const style = process.argv.indexOf('--style') > -1 ? process.argv[process.argv.indexOf('--style') + 1] : `mapbox/streets-v11`;
const staticImageReq = (center) => `${API_URL}/styles/v1/${style}/static/${center},12/800x800?access_token=${token}`

const getCenter = (text) => {
    axios.get(`${API_URL}/geocoding/v5/mapbox.places/${text}.json?access_token=${token}`)
        .then(res => {

           const center = res.data.features[0].center;
           return console.log(staticImageReq(center))

        }).catch(err => {
            console.error(err);
        })
    };



getCenter(encodeURIComponent(address));