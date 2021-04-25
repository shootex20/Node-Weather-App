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
    geocode (address, (error, data) => {
      if (error)
      {
      return console.log('Error', error)

      }

      forecast (data.latitude, data.longitude, (error, forecastData) => {

        if (error)
        {
        return console.log(error)
        }

        console.log(data.location)
        console.log(forecastData)
      })

    })
    rl.close()
  }
})

