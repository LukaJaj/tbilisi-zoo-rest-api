const mongoose=require('mongoose');

const AnimalSchema=new mongoose.Schema({

    id: Number,
    name:String,
    type:String,
    class:String,
    family:String

});


module.exports=mongoose.model('Animal',AnimalSchema);