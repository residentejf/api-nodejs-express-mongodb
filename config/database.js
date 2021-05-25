//Cargando el modulo de mongoose
const mongoose = require('mongoose');
//Configurando la conexion para MongoDB, Debemos indicar el puerto y la IP de nuestra BD 
const mongoDB = 'mongodb://localhost/prueba';
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
module.exports = mongoose;