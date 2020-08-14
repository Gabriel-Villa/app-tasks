const { Schema, model } = require('mongoose');

const NotesSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    priority: {
        type: String,
        required: true
    },
}, {
    timestamps: true
})

module.exports = model('Note', NotesSchema);