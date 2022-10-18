const producto=require("../modelos/productos")
const fetch=(url)=>import('node-fetch').then(({default:fecth})=>fetch(url));

exports.getProducts=async (req,res,next) =>{
    const productos = await producto.find();
    res.status(200).json({
        success:true,
        count:productos.length,
        productos
    })
}

exports.getProductsById=async (req,res,next) =>{
    const idproduct=await producto.findById(req.params.id)
    if(!idproduct){
        return res.status(404).json({
            success:false,
            message:"No se encuentra ese producto"  
        })
    }
    res.status(200).json({
        success:true,
        message:"Este es tu producto: ",
        idproduct
    })
}

exports.updateProduct=async(req,res,next) =>{
    let idproduct=await producto.findById(req.params.id)
    if(!idproduct){
        return res.status(404).json({
            success:false,
            message:"No se encuentra ese producto"  
        })
    }
    idproduct=await producto.findByIdAndUpdate(req.params.id, req.body, {
        new:true,
        runValidators:true
    });
    res.status(200).json({
        success:true,
        message:"Producto actualizado",
        idproduct
    })
}

exports.deleteProduct=async(req,res,next) =>{
    const idproduct=await producto.findById(req.params.id)
    if(!idproduct){
        return res.status(404).json({
            success:false,
            message:"No se encuentra ese producto"  
        })
    }
    await idproduct.remove();
    res.status(200).json({
        success:true,
        message:"Producto eliminado",
        idproduct
    })
}

exports.newProduct=async(req,res,next) =>{
    const product=await producto.create(req.body);

    res.status(201).json({
        success:true,
        product
    })
}

function verProductos(){
    fetch('http://localhost:4000/api/producto')
    .then(res=>res.json())
    .then(res=>console.log(res))
    .catch(err=>console.error(err))
}

verProductos();