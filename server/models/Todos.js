import mongoose from 'mongoose';

const todoSchema = new mongoose.Schema({
    
    entry: {
        type: String,
        required: true
    },
    done: {
        type: mongoose.SchemaTypes.Boolean,
        required: true
    },
    userId: {
        type: mongoose.SchemaTypes.ObjectId
    }
})


const Todos = mongoose.model('Todos', todoSchema)
export default Todos;