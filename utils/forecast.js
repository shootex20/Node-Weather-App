const request = require('request')

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