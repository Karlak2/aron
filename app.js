const express = require('express')
const app=express()
const fs=require("fs-extra")
const bodyParser=require('body-parser')

app.use(express.static('public'))
app.use(bodyParser.json())

app.get('/',async(req,res)=>{
    const ind=await fs.readFile('index.html','utf-8')
    res.send(ind)
})

app.get('/:getid',async(req,res)=>{
    try {
        const ind=await fs.readFile(`public/${req.params.getid}.html`,'utf-8')
        res.send(ind)
    } catch (error) {
        const ind=await fs.readFile(`public/error.html`,'utf-8')
        res.send(ind)
    }
})

app.listen(3000,()=>{
    console.log('App run at localhost:3000!')
})