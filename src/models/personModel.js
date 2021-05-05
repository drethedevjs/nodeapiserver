import mongoose from 'mongoose';

const Schema = mongoose.Schema;

// Creating db schema that defines how the data should look
export default PeopleSchema = new Schema({
    name:{
        type: String,
        required: 'Enter name.'
    },
    age: {
        type: Number,
        required: 'Enter age.'
    }
})