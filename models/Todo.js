const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const TodoSchema = new Schema({
    title: { type: String , required: true },
    description: { type: String, required: true },
    isChecked: { type: Boolean },
})

const Todo = mongoose.model("todos" , TodoSchema);

module.exports = Todo ;