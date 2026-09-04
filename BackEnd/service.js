const { default: mongoose } = require("mongoose");
require('dotenv').config()
async function ConnectDB() {
   
    // await mongoose.connect("mongodb://raufrana0322_db_user:3EtSTUAlSgVnntg5@ac-u3dslpy-shard-00-00.i8epzax.mongodb.net:27017,ac-u3dslpy-shard-00-01.i8epzax.mongodb.net:27017,ac-u3dslpy-shard-00-02.i8epzax.mongodb.net:27017/?ssl=true&replicaSet=atlas-26slg3-shard-0&authSource=admin&appName=Cluster0/practice").then(res=> console.log("DB connected")).catch(err => console.log(err))
    await mongoose.connect(process.env.DATABASE_URL).then(res=> console.log("DB connected")).catch(err => console.log(err))
    
}

module.exports = ConnectDB