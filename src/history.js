const express=require('express')
const science=express.Router()
const axios=require('axios')

science.get('',async(req,res)=>{
try{
const newsAPI=await axios.get(`https://www.googleapis.com/blogger/v3/blogs/4118029575535407550/posts?=&key=AIzaSyCPYI5ATvwQUAKN86jvivg3fK4kNL7TFEc`)
res.render('history',

{temp:newsAPI.data.items})
}
catch(err){
if(err.response){
console.log(err.response.temp)
}
else if(err.requiest){
console.log(err.requiest.temp)
}
else{
console.error('Error',err.message.temp)
}
}
})

module.exports=science
