const express =require('express')
const  cors=require('cors')
const mongoose = require('mongoose')
const ConnectDB = require('./service')


ConnectDB()

let EmployeeSchema = mongoose.Schema({
    name : String,
    designation : { type: String, require:true }
})

let EmployeeODM = mongoose.model('employee', EmployeeSchema)



let CarSchema= mongoose.Schema({
name : {type : String , require: true},
    model : String
})
let carODM = mongoose.model('car',CarSchema)




let app =express()
app.use(cors({origin: process.env.VITE_API_URL}))
app.use(express.json())

app.get('/', (req,res)=>{
    res.json({message : 'chal rha hy ............. '})
})
app.get('/Carall',async (req,res)=>{
    let data=req.query
    let dbres=await carODM.find(data)
    res.json(dbres)
})


app.post('/insert' , async (req ,res)=>{
    let data = req.body;
    console.log(data);
    
    let dbres = await EmployeeODM.insertOne( data )
    res.json(dbres)
})

app.get('/all', async(req,res)=>{
    let dbres=await EmployeeODM.find({name: 'Rauf'})
    res.json(dbres)
})

app.get('/insertcar',async(req,res)=>{
    let data=req.query
    if (data.name == '') {
       return res.json({message : "Naam zruri hy", status:400})
    }
    let dbres=await carODM.insertOne(data)
    res.json(dbres)
})
module.exports = app;
const PORT = process.env.PORT || 5000;
if (process.env.NODE_ENV !== 'production') {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}
