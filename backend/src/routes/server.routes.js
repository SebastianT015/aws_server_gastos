const express = require('express');
const router = express.Router();

const gastos = require('../controllers/gastos.controllers');
const usuarios = require('../controllers/usuarios.controllers');

router.get('/misitio/gastos',gastos.getGastos);
router.post('/misitio/gastos',gastos.addGasto);
router.get('/misitio/gastos/:id', gastos.getGasto);
router.put('/misitio/gastos/:id', gastos.editGasto);

router.get('/misitio/usuarios',usuarios.getUsuarios);
router.post('/misitio/usuarios', usuarios.addUsuario);

router.get('/misitio', (req, res) => {
  res.send('Bienvenido Backend Cálculo de Gastos')
})

router.get('/misitio/about', (req, res) => {
  res.send('Acerca de mi sitio web')
})

router.get('/misitio/contacto', (req, res) => {
  res.sendFile('./Contacto.jpeg', { root: __dirname })
})

router.use((req, res) => {
  res.status(404).send('Lo sentimos, no encontramos la página que buscas')
})

module.exports = router;

/*router.get('/misitio/gastos', (req,res)=>{
    res.json(
        {
            gasto:'Salud',
            monto:14575.60,
            informacion:'Corresponde a consultas médicas, pagos de seguros, medicinas'
}
    )
});

router.post('/misitio/gastos', (req, res) => {
  res.send('Registro de gasto exitoso')
})

router.put('/misitio/gastos', (req, res) => {
  res.send('Actualizacion de gasto exitoso')
}) */