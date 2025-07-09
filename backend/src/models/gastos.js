const mongoose=require('mongoose');
const {Schema}=mongoose;
const GastosSchema=new Schema({
tipo:{type:String, required:true},
monto:{type:Number, required:false},
descripcion:{type:String, required:false},
createAt:{type:Date, default:Date.now},
})
module.exports=mongoose.model('Gasto',GastosSchema);