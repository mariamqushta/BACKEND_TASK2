const { error } = require("console")
const request=require("request")
// const url="http://api.weatherapi.com/v1/current.json?key=1aad7fb98fbe4edc8cb140555241807&q=egypt&aqi=no"
// request({url},(error,response)=>{
//     // console.log(response.body)
// const data1 =JSON.parse(response.body)
// console.log(data1.location.name)
// console.log(data1.location.lat)
// console.log(data1.location.lon)
// console.log(data1.current.condition.text)
// })


// const forecast=(latitude,longtitude,callback)=>{
// request({url,json:true},(error,response)=>{
//     if(error){
//         callback("ERROR HAS OCCUERD",undefined)
//     }else if(response.body.error){
//         callback(response.body.error.message,undefined)
//     }else{
//         callback(undefined,response.body.location.name+"is today"+response.body.current.condition.text)
//         // console.log(response.body.location.name)
//         // console.log(response.body.location.lat)
//         // console.log(response.body.location.lon)
//         // console.log(response.body.current.condition.text)
//     }
// })}



// const geocode=(address,callback)=>{
// const geocodeurl="https://api.mapbox.com/geocoding/v5/mapbox.places/"+address+".json?access_token=pk.eyJ1IjoiaXNsYW0yODQiLCJhIjoiY2wwamEzNmFhMGFtNTNkb3pqaXk4bXNnYSJ9.qYlrWIqo41gXgNNc4h8yIw "
// request({url:geocodeurl,json:true},(error,response)=>{
//  if(error){
//     callback("unable to connect gecode service",undefined)
//  }else if(response.body.message){
//     callback(response.body.message,undefined)
//  }else if(response.body.features.length==0){
//     callback("unable to find location",undefined)
//  }else{
//     callback(undefined,{
//         longtitude:response.body.features[0].center[0],
//         latitude:response.body.features[0].center[1]
//     })
//  }
// })}
const forecast=require("./data1/forecast")
const geocode=require("./data1/geocode")
const country=process.argv[2]
geocode(country,(error,data)=>{
    console.log("error:",error)
    console.log("data:",data)
    forecast(data.latitude,data.longtitude,(error,data)=>{
        console.log("error:",error)
        console.log("data:",data)
    })
    
})