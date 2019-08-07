const { Schema, model } = require('mongoose');

const MovieSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    poster: {
        type: String,
        required: false
    },
    overview: {
        type: String,
        required: true
    }
}, { timestamps: true });

module.exports = model('Movie', MovieSchema);
