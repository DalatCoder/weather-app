const geoCode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const address = process.argv[2]

if (!address) {
  return console.log('Please provide an address!')
}

geoCode(address, (error, geocode) => {
  if (error) {
    return console.log(error)
  }

  forecast(geocode.latitude, geocode.longitude, (error, data) => {
    if (error) {
      return console.log(error)
    }

    console.log(geocode.location)
    console.log(`${data.summary} It's ${data.temperature} degrees out. There is ${data.rainPercent}% chance of rain.`)
  })
})
