const express=require('express');
const app=express();
const path = require('path');
const port =process.env.PORT || 5000
app.use(express.static('Public'));
app.use(express.static('styles'));
app.use('/css',express.static('Public/css'));
app.use('/js',express.static('Public/js'));
app.set('views','./src')
app.set('view engine','ejs')


//Routers//
const bg=require('./src/bg');
app.use('/',bg)

const Router1=require('./src/chapter1');
app.use('/chapter1',Router1)

const Router2=require('./src/chapter2');
app.use('/chapter2',Router2)

const Router3=require('./src/chapter3');
app.use('/chapter3',Router3)

const Router4=require('./src/chapter4');
app.use('/chapter4',Router4)

const Router5=require('./src/chapter5');
app.use('/chapter5',Router5)

const Router6=require('./src/chapter6');
app.use('/chapter6',Router6)

const Router7=require('./src/chapter7');
app.use('/chapter7',Router7)

const Router8=require('./src/chapter8');
app.use('/chapter8',Router8)

const Router9=require('./src/chapter9');
app.use('/chapter9',Router9)

const Router10=require('./src/chapter10');
app.use('/chapter10',Router10)

const Router11=require('./src/chapter11');
app.use('/chapter11',Router11)

const Router12=require('./src/chapter12');
app.use('/chapter12',Router12)

const Router13=require('./src/chapter13');
app.use('/chapter13',Router13)

const Router14=require('./src/chapter14');
app.use('/chapter14',Router14)

const Router15=require('./src/chapter15');
app.use('/chapter15',Router15)

const Router16=require('./src/chapter16');
app.use('/chapter16',Router16)

const Router17=require('./src/chapter17');
app.use('/chapter17',Router17)

const Router18=require('./src/chapter18');
app.use('/chapter18',Router18)

const science=require('./src/history')
app.use('/history', science)
//Routers//
app.get('/',(req,res)=>{
  res.render('bg')
})
app.get('/te_Chapters',(req,res)=>{
  res.render('temp')
})

app.listen(port,()=>console.log(`Listening on port ${port}`))
