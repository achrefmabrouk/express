const express= require('express')
const app = express()
const middleware = (req,res,next)=>{
    const date = new Date ()
const hours = date.getHours()
console.log(hours)
const day= date.getDay()
if (day>=1 && day<=5  && hours<=17 && hours>=9){
    next()
}else 
res.send('<h1>we are closed</h1>')
}
app.use(middleware)
app.get ('/',(req,res)=>{
    res.sendFile(__dirname+'/views/Home.html')
})
app.get ('/service',(req,res)=>{
    res.sendFile(__dirname+'/views/Service.html')
})
app.get ('/contact',(req,res)=>{
    res.sendFile(__dirname+'/views/Contact.html')
})
app.get ('/CSS/home.css',(req,res)=>{
    res.sendFile(__dirname+'/views/CSS/home.css')
})








app.listen(5000,err=>err ?console.log(err):console.log('server run on 5000'))