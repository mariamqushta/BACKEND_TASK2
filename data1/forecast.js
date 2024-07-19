const request=require("request")
const forecast=(latitude,longtitude,callback)=>{
    const url="https://api.weatherapi.com/v1/current.json?key=01cedda7775649e7a7575202232011%20&q=" + latitude + "," + longtitude
    request({url,json:true},(error,response)=>{
        if(error){
            callback("ERROR HAS OCCUERD",undefined)
        }else if(response.body.error){
            callback(response.body.error.message,undefined)
        }else{
            callback(undefined,response.body.location.name+" is today "+response.body.current.condition.text)
            // console.log(response.body.location.name)
            // console.log(response.body.location.lat)
            // console.log(response.body.location.lon)
            // console.log(response.body.current.condition.text)
        }
    })}

    module.exports=forecast