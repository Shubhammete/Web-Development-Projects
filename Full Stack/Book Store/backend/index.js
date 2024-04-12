import express from 'express'
import { PORT, MongoURL } from './config.js'
import mongoose from 'mongoose'
import {Book} from './models/Bookmodels.js';
import bookRoutes from './routes/booksRoutes.js'
import cors from 'cors'

// const Book = require('../models/Bookmodels.js')

// creating server
const app = express()

// creating book route
app.use('/books',bookRoutes)

// middleware to handle cors policy
// allow all origins
app.use(cors())
// allow custom origins
app.use(cors(
    {
        origin:"http:localhost:3000",
        methods:['GET','POST','DELETE','PUT'],
        allowedHeaders:['Content-Type']
    }
))


// creating http route
app.get('/',(req,res)=>{
    console.log(req)
    return res.status(233).send("Welcome")
})

// middleware to allow express to use json body
app.use(express.json())

// mongoDB connected
mongoose.connect(MongoURL).then(()=>{
    console.log("MongoDB connected")
    // listening to server
    app.listen(PORT,()=>{
        console.log(`App is listening on port ${PORT}`)
    })
    
}).catch((error)=>{
    console.log(error)
})