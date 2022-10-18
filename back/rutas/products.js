const express=require("express")
const router=express.Router();

const {getProducts, newProduct, getProductsById, updateProduct, deleteProduct}=require("../controlador/prodControlador")

router.route('/producto').get(getProducts)
router.route('/producto/nuevo').post(newProduct)
router.route('/producto/:id').get(getProductsById)
router.route('/producto/:id').put(updateProduct)
router.route('/producto/:id').delete(deleteProduct)

module.exports=router;