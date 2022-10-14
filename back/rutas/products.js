const express=require("express")
const router=express.Router();

const {getProducts, newProduct}=require("../controlador/prodControlador")

router.route('/producto').get(getProducts)
router.route('/producto/nuevo').post(newProduct)

module.exports=router;