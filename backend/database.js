const mongoose=require('mongoose');
//const URI='mongodb://localhost/gastos';
const URI='mongodb+srv://SebastianT09:Sebas3073039.@cluster0.iaprzbf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

mongoose.connect(URI)
.then(db=> console.log('BD conectada'))
.catch(err => console.error(err));

module.exports=mongoose;
