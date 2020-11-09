const request = require("request");
 const url = "http://api.weatherstack.com/current?access_key=bb5e9364a981230b7386a5cc35779edd&query=mumbai"

//  request({url:url, json:true}, (error, response)=> {
//      console.log(response.body.current)
//  })

// const geocode = "https://api.mapbox.com/geocoding/v5/mapbox.places/asdaaasd.json?access_token=pk.eyJ1IjoidHVzaGFyMTExMiIsImEiOiJja2d0dzUwcm8xaXViMnpsOGcyMHlybGtzIn0.lCFTzyX1P2g61o60-KjddA&limit=1" 
// request({url:geocode, json:true},(error, response) =>{
//     if (error){
//         console.log("Unable to connect")
//     }else if(response.body.features.length === 0){
//         console.log("Unable to find location try another search")
//     }else{
// const latitiude = response.body.features[0].center[1]
// const longitude = response.body.features[0].center[0]
// console.log(latitiude,longitude)
//     }   
//  });

 const geocode = (address, callback) => {
     const url ='https://api.mapbox.com/geocoding/v5/mapbox.places/'+encodeURIComponent(address)+'.json?access_token=pk.eyJ1IjoidHVzaGFyMTExMiIsImEiOiJja2d0dzUwcm8xaXViMnpsOGcyMHlybGtzIn0.lCFTzyX1P2g61o60-KjddA&limit=1'
     request({url:url, json:true}, (error, response)=>{
if(error){
callback('unable to connect to location services');
}else if(response.body.features.length === 0){
    callback('unable to find location try another search', undefined)
}else{
    callback(undefined, {
        latitude:response.body.features[0].center[0],
        longitude:response.body.features[0].center[1],
        location:response.body.features[0].place_name
    })
}
     })
 }



 module.exports = geocode   