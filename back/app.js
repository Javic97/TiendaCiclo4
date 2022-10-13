const express=require("express");
const app=express();

app.use(express.json());

const productos=require("./rutas/products")

app.use('/api',productos)

module.exports=app