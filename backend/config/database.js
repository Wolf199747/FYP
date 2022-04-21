const mongoose= require('mongoose');


const connectDatabase= () =>{

mongoose.connect("mongodb://wolf199747:Games123@fyp-shard-00-00.jbsts.mongodb.net:27017,fyp-shard-00-01.jbsts.mongodb.net:27017,fyp-shard-00-02.jbsts.mongodb.net:27017/FYP?ssl=true&replicaSet=atlas-3w87u5-shard-0&authSource=admin&retryWrites=false&w=majority",{

    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true
}).then(con =>{
    console.log(`Mongo Database connected with Host: ${con.connection.host}`)
})
}

module.exports= connectDatabase;