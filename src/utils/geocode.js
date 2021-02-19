const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=pk.eyJ1IjoiZmF5YXphYmR1MSIsImEiOiJja2wzZDhtOGUwbHFzMzJtcjlsdWRlb25nIn0.3Yhe-ypIEVMa642qkGi05w&limit=1'

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to location services!', undefined)
        } else if (body.features.length === 0) {

            callback('Unable to find location. Try another search.', undefined)
        } else {
            callback(undefined, {
                location: body.features[0].place_name
            })
            
        }
    })
}

module.exports = geocode