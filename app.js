const geoCode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const address = process.argv[2]

if (!address) {
  return console.log('Please provide an address!')
}

geoCode(address, (error, {longitude, latitude, location}) => {
  if (error) {
    return console.log(error)
  }

  forecast(latitude, longitude, (error, {temperature, rainPercent, summary}) => {
    if (error) {
      return console.log(error)
    }

    console.log(location)
    console.log(`${summary} It's ${temperature} degrees out. There is ${rainPercent}% chance of rain.`)
  })
})
