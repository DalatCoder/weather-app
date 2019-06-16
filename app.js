const request = require('request')
const geoCode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const address = 'Da Lat'

geoCode(address, (error, geocode) => {
  if (error) {
    console.log(error)
  } else {
    console.log(geocode.location)

    forecast(geocode.latitude, geocode.longitude, (error, data) => {
      if (error) {
        console.log(error)
      } else {
        console.log(`${data.summary} It's ${data.temperature} degrees out. It have ${data.rainPercent}% chance of rain.`)
      }
    })
  }
})
