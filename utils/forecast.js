const request = require('request')

const weatherstack = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=4044b1da54af6a5f42b84e0d617e707e&query='+ encodeURIComponent(latitude) + ',' + encodeURIComponent(longitude)
    request ({ url, json: true }, (error, { body }) => {
        if(error) {
            callback('Unable to find location services!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback (undefined, {
            overcast: body.current.weather_descriptions[0],
            currWeather: body.current.temperature,
            feelslike: body.current.feelslike
            })
        }
    })
}

module.exports = weatherstack