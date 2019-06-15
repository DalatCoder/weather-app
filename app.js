const request = require('request')

const latitude = 11.9600327
const longitude = 108.4394856
const units = 'si'

const url = `https://api.darksky.net/forecast/fee3e6e79b9a143d6a7f3a639e14c4a1/${latitude},${longitude}?units=${units}`

request({ url: url, json: true }, (error, response) => {
  const data = response.body

  console.log(`${data.daily.summary} It is currently ${data.currently.temperature} degrees out. There is a ${data.currently.precipProbability*100}% chance of rain.`)
})
