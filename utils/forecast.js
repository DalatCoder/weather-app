const request = require('request')

const forecast = (latitude, longitude, callback) => {
  const accessToken = 'fee3e6e79b9a143d6a7f3a639e14c4a1'
  const units = 'si'
  const url = `https://api.darksky.net/forecast/${accessToken}/${latitude},${longitude}?units=${units}`

  request({
    url: url,
    json: true
  }, (error, response) => {
    if (error) {
      callback('Unable to connect to location services!')
    } else if (response.body.error) {
      callback('Unable to find location!')
    } else {
      callback(undefined, {
        temperature: response.body.currently.temperature,
        rainPercent: response.body.currently.precipProbability * 100,
        summary: response.body.daily.summary
      })
    }
  })
}

module.exports = forecast
