const express = require("express")

const app= express()

 const firstHandler =((req,res,next)=>{
    if(10<20)
   { next()}
})

const secondHandler =((req,res,next)=>{
    if(10>20)
  { 
     next()
}else{
    console.log("Sorry ")
}
})
const thirdHandler =((req,res,next)=>{
    if(30<40)
   { 
    next()
}
})
app.get('/home',firstHandler,(req,res)=>{
    res.send("hello ")
})

app.get('/about',secondHandler,(req,res) =>{
    res.send("about page")
})

app.get('/user/:121',thirdHandler,(req,res)=>{
    res.send("you searched for 121")
})


const port = 5500;
 app.listen(port,() =>{
    console.log("Server  start and running.....")
 })