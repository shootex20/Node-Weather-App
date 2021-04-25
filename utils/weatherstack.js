const request = require('request')

// const url = 'http://api.weatherstack.com/current?access_key=4044b1da54af6a5f42b84e0d617e707e&query=37.8267,-122.4233'
// const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1Ijoic2hvb3RleDIwIiwiYSI6ImNrbnRxNngwYjA0bTcydXM3bmo2ZXoxODEifQ.atVfq7muMsezUnQTqyAzgg'

// request({ url: url, json: true}, (error, response) => {
//   if (error)
//   {
//     console.log('Unable to connect to weather service')
//   } 
//   else if (response.body.error) {
//     console.log('Unable to find location')

//   } else {

//     const overcast = response.body.current.weather_descriptions[0]
//     const currWeather = response.body.current.temperature
//     const feelslike = response.body.current.feelslike
//     console.log(overcast + '. It is currently ' + currWeather + ' degrees out, but it feels like ' + feelslike)
//   }
// })

const weatherstack = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=4044b1da54af6a5f42b84e0d617e707e&query='+ encodeURIComponent(latitude) + ',' + encodeURIComponent(longitude)
    request ({ url: url, json: true }, (error, response) => {
        if(error) {
            callback('Unable to find location services!', undefined)
        } else if (response.body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback (undefined, {
            overcast: response.body.current.weather_descriptions[0],
            currWeather: response.body.current.temperature,
            feelslike: response.body.current.feelslike
            })
        }
    })
}

module.exports = weatherstack