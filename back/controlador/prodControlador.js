const producto=require("../modelos/productos")

exports.getProducts=(req,res,next) =>{
    res.status(200).json({
        success:true,
        message:"Ruta OK"
    })
}

exports.newProduct=async(req,res,next) =>{
    const product=await producto.create(req.body);

    res.status(201).json({
        success:true,
        product
    })
}