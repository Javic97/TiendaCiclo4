const mongoose=require("mongoose")

const productosSchema=mongoose.Schema({
    nombre:{
        type:String,
        required:[true,"Por favor registrar nombre del producto"],
        trim:true,
        maxLength:[100,"El nombre del producto no debe exceder de 100 caracteres."]
    },
    precio:{
        type:Number,
        required:[true, "Por favor registre el valor del producto"],
        maxLength:[8,"El valor del producto no debe exceder de 99.999.999"],
        default:0.0,
    },
    descripcion:{
        type:String,
        required:[true, "Por favor registrar descripción del producto"],
    },
    calificacion:{
        type: Number,
        default:0
    },
    imagen:[
        {
            public_id:{
                type:String,
                required:true
            },
            url:{
                type:String,
                required:true
            }
        }
    ],
    categoria:{
        type:String,
        required:[true,"Por favor seleccionar la categoria del producto"],
        enum:{
            values:[
                "Cerveza",
                "Licores",
                "Cocteles",
                "Cafe",
                "Comidas"
            ]
        }
    },
    empleado:{
        type:String,
        required:[true, "Por favor registre el empleado"]
    },
    inventario:{
        type: Number,
        required:[true,"Por favor registre el stock del producto"],
        maxLength:[4,"Cantidad maxima no debe pasar de 9999"],
        default:0
    },
    numCalificaciones:{
        type:Number,
        default:0
    },
    opinion:[
        {
            nombreCliente:{
                type:String,
                required:true
            },
            rating:{
                type:Number,
                required:true
            },
            comentario:{
                type:String,
                required:true
            }
        }
    ],
    fechaCreacion:{
        type:Date,
        default:Date.now
    }
})

module.exports=mongoose.model("Productos",productosSchema)