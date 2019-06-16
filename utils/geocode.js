const request = require('request')

const geoCode = (address, callback) => {
  const accessToken = 'pk.eyJ1IjoidHJvbmdoaWV1IiwiYSI6ImNqd3hicWk5djBpNmYzeWp6ZXp1c3N3NHcifQ.kr1qW_AQ3AwdgPPFHqjI5Q'
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=${accessToken}&limit=1`

  request({
    url: url,
    json: true
  }, (error, response) => {
    if (error) {
      callback('Unable to connect to location services!')
    } else if (response.body.features.length === 0) {
      callback('Unable to find location!')
    } else {
      callback(undefined, {
        longitude: response.body.features[0].center[0],
        latitude: response.body.features[0].center[1],
        location: response.body.features[0].place_name
      })
    }
  })
}

module.exports = geoCode
