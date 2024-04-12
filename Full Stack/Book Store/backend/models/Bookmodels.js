import mongoose from 'mongoose'

// DB schema
const bookSchema = mongoose.Schema(
    {
        "title":{
            type:String,
            required: true
        },
        "author":{
            type:String,
            required:true
        },
        "publishYear":{
            type:Number,
            required:true
        },
    },
        {
            timestamps:true,  //this will show createdAt and updatedAt as an object with date
        }
    
)
// export model
export const Book = mongoose.model('Book',bookSchema)
