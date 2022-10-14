const mongoose=require("mongoose");

const connectDatabase=() => {
    mongoose.connect(process.env.DB_LOCAL_URI, {
        useNewUrlParser: true,
        useUnifiedTopology:true
    }).then(con => {
        console.log(`Base de datos conectada: ${con.connection.host}`)
    }).catch(con => {
        console.log(`No se logro conexión`)
    })
}

module.exports=connectDatabase;