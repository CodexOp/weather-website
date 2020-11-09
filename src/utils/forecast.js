const request = require('request');


const forecast = (longitude, latitude, callback) =>{
    const url = "http://api.weatherstack.com/current?access_key=bb5e9364a981230b7386a5cc35779edd&query="+ latitude + ',' + longitude + "&units=f";
    request({url:url, json:true}, (error, response)=>{
if(error){
    callback('unable to connect to whether service', undefined)
}else if(response.body.error){
    callback('unable to find location', undefined);
}
else{
callback(undefined, response.body.current.temperature + ' is the current temprature ' +  response.body.current.precip + ' % has the chance of rain')
}
    })
}

module.exports = forecast;