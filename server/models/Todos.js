import mongoose from 'mongoose';

const todoSchema = new mongoose.Schema({
    entry: String,
    user:  String,
    tags: [String],
    createdAt: {
        type: Date,
        default: new Date()
    }
})


const Todos = mongoose.model('Todos', todoSchema)
export default Todos;