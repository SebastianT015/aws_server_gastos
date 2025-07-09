const usuarioController = {};

//metodo GET
usuarioController.getUsuarios = async(req, res) => {
    res.json([
        {
            id: 1,
            nombre: 'Juan Pérez',
            email: 'jperez@ups.edu.ec'
        },
        {
            id: 2,
            nombre: 'María López',
            email: 'mlopez@ups.edu.ec'
        },
        {
            id: 3,
            nombre: 'Carlos García',
            email: 'cgarcia@ups.edu.ec'
        }

    ]);
};

//metodo POST
usuarioController.addUsuario = async(req, res) => {
    console.log(req.body);
    res.send("Nuevo usuario registrado");
};

module.exports = usuarioController;