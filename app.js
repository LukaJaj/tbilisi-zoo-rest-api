
/**
  TODO: Implement POST/DELETE requests
 */

const express= require('express');
const data= require('./data.json');
const mongoose=require('mongoose');
const dotenv= require('dotenv');
const animal=require('./model/Animal');

const app=express();

app.use(express.json());

dotenv.config();

mongoose.connect(process.env.DB_CONNECT,
    { useNewUrlParser: true },()=>{
    console.log('connected to Database');
});

app.get('/api/animals',(req,res)=>{
res.send(data);
});

app.get('/api/animal/:id',(req,res)=>{
const animal= data.find(o=>o.id===parseInt(req.params.id));
if(!animal){
    res.status(200).send('Cant find object with given id');
}
 res.json(animal);
});

app.get('/api/animals/mammals',(req,res)=>{
    const mammals=data.filter(o=>o.type==='ძუძუმწოვარი');
    if(!mammals){
        res.status(200).send('Cant find object');
    }
    res.json(mammals);

});
app.get('/api/animals/reptiles',(req,res)=>{

    const reptile=data.filter(o=> o.type==='რეპტილია');
    if(!reptile){
        res.status(200).send('Cant find object');
    }
    res.json(reptile);

});
app.get('/api/animals/bird',(req,res)=>{

    const bird=data.filter(o=>o.type==='ფრინველი');
    if(!bird){
        res.status(200).send('Cant find Obejct');
    }
    res.json(bird);

});

app.post('/api/animals',(req,res)=>{

    const result=new animalModel({

    id:req.body.id,
    name:req.body.name,
    type:req.body.type,
    class:req.body.class,
    family:req.body.family
    });
   


});

app.listen(3000,'localhost');
