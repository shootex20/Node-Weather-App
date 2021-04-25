const request = require ('request')

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

// request({ url: geocodeURL, json: true}, (error, response) => {
//   if(error)
//   {
//     console.log('Unable to connect to geolocation service')
//   }
//   else if(response.body.features.length == 0)
//   {
//     console.log('Unable to find location. try another search.')
//   } else {
//   const latitude = response.body.features[0].center[1]
//   const longitude = response.body.features[0].center[0]
//   console.log(latitude, longitude)
//   }
// })

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1Ijoic2hvb3RleDIwIiwiYSI6ImNrbnRxNngwYjA0bTcydXM3bmo2ZXoxODEifQ.atVfq7muMsezUnQTqyAzgg'
    request({ url: url, json: true }, (error, response) => {

      if(error)
      {
        callback('Unable to connect to location services!', undefined)
      } else if (response.body.features.length === 0) {
        callback('Unable to find location. Try another search.', undefined)
      } else {
        callback(undefined, {
          latitude: response.body.features[0].center[1],
          longitude: response.body.features[0].center[0],
          location: response.body.features[0].place_name
        })
      }
  })
}

geocode ('New York', (error, data) => {
  console.log('Error', error)
  console.log('Data', data)
})