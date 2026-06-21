import express, { json } from 'express';
import mongoose from 'mongoose';
import mod1 from './models/mod1.js'
import crypto from 'crypto';
import axios from 'axios';
const app = express();
app.use(express.json());
app.listen(3000 ,()=>{
    console.log("fuck u");
})
app.post('/up',async(req,res)=>{

    try{
        const product = await mod1.create(req.body);
        res.status(200).json(product);
    }
    catch(e){
        res.status(500).send("failed")
    }
    console.log(req.body)
    
})



app.get("/files",async(req,res)=>{
    try{
        const results = await mod1.find({});
        res.status(200).json(results)
    }
    catch(e){
        console.log(e);
        res.status(503).json({message:e});
    }
    console.log("get")
    res.send(JSON.stringify({'hello':'hi'}))
})

app.get("/find/:id",async(req,res)=>{
    try{
        
        const {id} = req.params;
        const results  = await mod1.findOne({code : id});

        res.status(200).json(results)
    }
    catch(e){
        res.status(503).json({message:e})
    }
})
app.post("/mid",async(req,res)=>{
    try{
        
        const code = Math.floor(100000+Math.random()*90000);
        console.log(code);
        

        // res.status(200).json(results)
        console.log(req.body['name'])
        const results = await mod1.create({ 'name':req.body['name'],'file':req.body['file'],'code':code.toString
            ()
         })
         
        res.status(200).json(results)
        crypto.generateKey
    }
    catch(e){
        // res.status(503).json({message:e})
    }
})
mongoose.connect("mongodb+srv://one:one23@cluster0.0fuatvh.mongodb.net/GlassNode?appName=Cluster0")
.then((r,q)=>{
    console.log("connected to mongoooinoooooooo");
    // console.log(r)
})
.catch((e)=>{
    console.log("ddd")
})
console.log("Hello")

