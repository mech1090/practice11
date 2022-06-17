const express = require('express')
const cors = require('cors')
const config = require('config')
const { default: mongoose } = require('mongoose')
const userPage = require('./routes/user.route')

require('./db')


const app = express()

app.use(express())
app.use(cors())
app.use(express.json())
app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))
app.use('/user',userPage)

app.set('view engine','pug')
app.set('views','./views')


app.get('/',(req,res)=>{
    res.send('OK')
})

app.get('*',(req,res)=>{
    res.send('BAD_REQUEST')
})

port = config.get('port')

mongoose.connection.once('open',()=>{
    app.listen(port,()=>{
        console.log(`Server is running at port ${port}`)
    })

    console.log('DB connected')
})

