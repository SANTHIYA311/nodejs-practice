const express = require ("express");
const cors = require ("cors");
const app = express();
const options =  { origin:(origin,callback) => {
     callback(null,true) } }



app.use(cors(options))
app.use(express.json())
let studentdata=[{'name':"nithya"},{age:19},{rollno:233304},]
app.get("/",(req,res)=>{
    res.send(studentdata)
})

app.post("/",(req,res)=>{
    studentdata.push(req.body);
    console.log(req.body)
    res.send("done")
})


const data = ['name:shyamala','age:19','favorite:rasam']
app.get('/',(req,res)=>{
    res.send(data)
})


app.listen(3333,()=>{
    console.log("started")
})