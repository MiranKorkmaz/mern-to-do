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
    user: {
        type: mongoose.SchemaTypes.ObjectId
    }
})


const Todos = mongoose.model('Todos', todoSchema)
export default Todos;