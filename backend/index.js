const express = require('express')
const http = require('http')
const app = express()
const cors = require('cors')

const userRoutes = require('./routes/userRoutes')


const mongoose = require('mongoose')

const url = 'mongodb+srv://bhushanravindrapatil77:iGA2Yuhg5626aHr7@cluster0.ap69s.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

mongoose.connect(url).then(()=>{console.log('db connected...')}).catch((err)=>{console.log('something went wrong', err)})



app.use(cors())
app.use(express.json())




app.use('/users', userRoutes);










const server = http.createServer(app)

server.listen(3000, ()=>{
    console.log('server is running...')
})

