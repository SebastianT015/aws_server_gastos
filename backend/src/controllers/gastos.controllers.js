
const Gasto=require('../models/gastos');
const gastosController={};
//metodo GET
gastosController.getGastos= async(req, res)=>{
    const gastos= await Gasto.find();
    res.json(gastos);
}
//metodo POST
gastosController.addGasto= async(req,res)=>{
    const gasto=new Gasto({
        tipo: req.body.tipo,
        monto:req.body.monto,
        descripcion:req.body.descripcion
    });
    console.log(gasto);
    await gasto.save();
    res.json('status: Gasto guardado');
}

gastosController.getGasto=async(req,res)=>{
 console.log(req.params.id);
 const gasto= await Gasto.findById(req.params.id);
 res.json(gasto);
}

gastosController.editGasto=async(req,res)=>{
 const {id}=req.params;
 const gasto={
 tipo: req.body.tipo,
 ruc: req.body.ruc,
 empresa: req.body.empresa,
 monto: req.body.monto 
 };
 await Gasto.findByIdAndUpdate(id, {$set:gasto},{new: true});
 res.json('status: Gasto actualizado');
}
module.exports=gastosController;

/*//metodo GET
gastosController.getGastos = (req, res) => {
    res.json([
        {
            id: 100,
            gasto: 'Salud',
            monto: 14575.60,
            informacion: 'Corresponde a consultas médicas, pagos de seguros, medicinas'
        },
        {
            id: 200,
            gasto: 'Educación',
            monto: 2500.00,
            informacion: 'Gastos en supermercado y restaurantes'
        },
        {
            id: 300,
            gasto: 'Vivienda',
            monto: 1200.00,
            informacion: 'Gastos en transporte público y gasolina'
        }
    ]);
}

//metodo POST
gastosController.addGastos = (req, res) => {
    console.log(req.body);
    res.send("Nuevo gasto registrado");
}

module.exports = gastosController;*/