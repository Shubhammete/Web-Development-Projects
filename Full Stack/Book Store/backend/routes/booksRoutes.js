import express from 'express'
import { Book } from '../models/Bookmodels.js'

const router = express.Router()


// Add Book
router.post('/',async (req,res)=>{
    // try catch for error handling
    try {
        // check if all necessary fields are filled
    if(!req.body.title || !req.body.author || !req.body.publishYear ){
        return res.status(400).send({message:"Fill all required fields"})
    }
    // create new schema
    const newBook = {
        "title": req.body.title, 
        "author": req.body.author, 
        "publishYear": req.body.publishYear
    }
    // create new object
    const book = await Book.create(newBook)
    res.status(200).send(book)
}
catch(error){
    console.log(error)
    res.status(500).send({message:error.message})
}
})

// get all books 
router.get("/",async (req,res)=>{
    try{
        // empty obj to get all books
        const books = await Book.find({})
        res.status(200).json({
            count:books.length,
            data:books
        })
    }catch(e){
        console.log(error)
        res.status(500).send({message: e.message})
    }
})

// get book by id 
router.get('/:id',async (req,res)=>{
    try{
        const {id} = req.params
        // empty obj to get all books
        const book = await Book.findById(id)
        return res.status(201).json(book)
    }catch(e){
        console.log(e)
        res.status(500).send({message: e.message})
    }
})

// update books
router.put('/:id',async (req,res)=>{
    // try catch for error handling
    try {
        // check if all necessary fields are filled
    if(!req.body.title || !req.body.author || !req.body.publishYear ){
        return res.status(400).send({message:"Fill all required fields"})
    }
    
    const {id} = req.params
    const result = await Book.findByIdAndUpdate(id,req.body)

    if(!result){
    return res.status(404).send({message:'No book found'});
    }

    return  res.status(200).send("Book Updated Successfully");
}
catch(error){
    console.log(error)
    res.status(500).send({message:error.message})
}
})


// delete book
router.delete('/:id',async (req,res)=>{
    // try catch for error handling
    try {
    
    const {id} = req.params
    const result = await Book.findByIdAndDelete(id,req.body)

    if(!result){
    return res.status(404).send({message:'No book found'});
    }

    return  res.status(200).send("Book Deleted Successfully");
}
catch(error){
    console.log(error)
    res.status(500).send({message:error.message})
}
})

export default router