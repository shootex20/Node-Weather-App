const request = require ('request')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')
const readline = require("readline")


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question("What is the area for the weather you are searching for? ", function(address)
{
  if(!address)
  {
    rl.close()
    return console.log('Address cannot be empty!')
  } else {
    geocode (address, (error, { latitude, longitude, location } = {}) => {
      if (error)
      {
      return console.log('Error', error)

      }

      forecast (latitude, longitude, (error, forecastData) => {

        if (error)
        {
        return console.log(error)
        }

        console.log(location)
        console.log(forecastData)
      })

    })
    rl.close()
  }
})

