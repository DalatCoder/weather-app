const request = require('request')

const latitude = 11.9600327
const longitude = 108.4394856
const units = 'si'
const darkSkyToken = 'fee3e6e79b9a143d6a7f3a639e14c4a1'

const darkSkyURL = `https://api.darksky.net/forecast/${darkSkyToken}/${latitude},${longitude}?units=${units}`


request({ url: darkSkyURL, json: true }, (error, response) => {

  if (error) {
    console.log('Unable to connect to services!')
  } else if (response.body.error) {
    console.log('Unable to find location!')
  } else {
    const data = response.body
    console.log(`${data.daily.summary} It is currently ${data.currently.temperature} degrees out. There is a ${data.currently.precipProbability*100}% chance of rain.`)
  }
})

const geoCodeToken = 'pk.eyJ1IjoidHJvbmdoaWV1IiwiYSI6ImNqd3hicWk5djBpNmYzeWp6ZXp1c3N3NHcifQ.kr1qW_AQ3AwdgPPFHqjI5Q'
const address = 'Los%20Angeles'

const geoCodeURL = `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=${geoCodeToken}&limit=1`

request({ url: geoCodeURL, json: true }, (error, response) => {
  if (error) {
    console.log('Unable to connect to mapbox services!')
  } else if (response.body.features.length === 0) {
    console.log('Unable to find location!')
  } else {
    const longitude = response.body.features[0].center[0]
    const latitude = response.body.features[0].center[1]
    console.log(`${latitude} : ${longitude}`)
  }
})
