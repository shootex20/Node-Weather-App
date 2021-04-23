const request = require ('request')

const url = 'http://api.weatherstack.com/current?access_key=4044b1da54af6a5f42b84e0d617e707e&query=37.8267,-122.4233'

request({ url: url, json: true}, (error, response) => {
    console.log(response.body.current.weather_descriptions[0] + '. It is currently ' + response.body.current.temperature + ' degrees out, but it feels like ' + response.body.current.feelslike)
})
