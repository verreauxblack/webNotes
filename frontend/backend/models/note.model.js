const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const noteSchema = new Schema({
    title: {
        type: String
    },
    content: {
        type: String
    },
    dateCreated: {
        type: String
    },
    labels: {
        type: [String]
    },
    colorClass: {
        type: String
    },
    isArchived: {
        type: Boolean
    },
    isTrashed: {
        type: Boolean
    },
    timestamp: {
        type: Number
    },
    author: {
        type: String
    }
},{
    timestamps: true
});

const Note = mongoose.model('Note', noteSchema);

module.exports = Note;