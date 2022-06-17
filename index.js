const express = require('express')
const cors = require('cors')

const app = express()

app.use(express())
app.use(cors())
app.use(express.json())
app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))

app.get('/',(req,res)=>{
    res.send('OK')
})

app.get('*',(req,res)=>{
    res.send('BAD_REQUEST')
})

port = 3300

app.listen(port,()=>{
    console.log(`Server is running at port ${port}`)
})