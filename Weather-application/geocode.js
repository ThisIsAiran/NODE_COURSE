const request = require('request')
const geocode = (address, callback)=>{
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address+'.json?access_token=pk.eyJ1IjoiZ3VwdGFhbWFuNzA2NTkiLCJhIjoiY2pzeXl3bXZ5MGd3bzN5cGhybGJhMDRodyJ9.BS5cRzAaTwMWWG58C-nFbw'
   request({url:url,json:true},(error, response)=>{
       if(error)
           callback("Network problem",undefined)
       else if(response.body.features.length==0)
           callback("address is wrong",undefined)
       else
       {
           callback(undefined,{
               longitude:response.body.features[0].center[0],
               latitude:response.body.features[0].center[1],
               place_name:response.body.features[0].place_name
           })
       }
   })
}

geocode("jaipur", (error,address)=>{
   console.log(address.longitude, address.latitude, address.place_name)
})