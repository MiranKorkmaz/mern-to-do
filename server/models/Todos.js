import mongoose from 'mongoose';

const todoSchema = new mongoose.Schema({
    
    entry: {
        type: String,
        required: true
    },
    user: {
        type: String
    },
    tags: [String],
    createdAt: {
        type: Date,
        default: new Date()
    }
})


const Todos = mongoose.model('Todos', todoSchema)
export default Todos;