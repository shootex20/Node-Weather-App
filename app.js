const request = require ('request')
const geocode = require('./utils/geocode')
const weatherstack = require('./utils/weatherstack')



geocode ('New York', (error, data) => {
  console.log('Error', error)
  console.log('Data', data)
})

weatherstack ('37.806', '-122.411', (error, data) => {
  console.log('Error', error)
  console.log('Data', data)
})