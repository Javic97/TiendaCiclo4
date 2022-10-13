const express=require("express")
const router=express.Router();

const {getProducts}=require("../controlador/prodControlador")

router.route('/productos').get(getProducts)

module.exports=router;