//importar bibliotecas
const express=require("express");
const app = express();
const personaRoutes= require("./routes/persona");
//middleware
app.use(express.json());
app.use('/persona',personaRoutes);
//Definir las rutas
app.get('/test',(request,response)=>{
    console.log('Servicio de prueba2');
    response.send('<h1>Servidor en línea</h1>');
});
//Levantar el server y escuchar peticiones
app.listen(8080,()=>{
    console.log("Servidor escuchando 👂🚀" )
})