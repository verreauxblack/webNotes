const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const labelSchema = new Schema({
    author:{
        type: String
    },
    labels: [{
        type: String
    }]
},{
    timestamps: true
});

const Label = mongoose.model('Label', labelSchema);

module.exports = Label;