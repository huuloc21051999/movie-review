var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var FilmSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        index: true,
    },
    author: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'User',
    },
    poster: {
        type: String,
        trim: true,
    },
    banner: {
        type: String,
        trim: true,
    },
    trailers: {
        type: [String]
    },
    images: {
        type: [String]
    },
    actors: {
        type: [String]
    },
    genre: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'Genre',
    },
    description: {
        type: String,
        trim: true,
    },
    is_top: {
        type: Boolean,
        default: false,
    },
    date_created: {
        type: Date,
        default: Date.now
    },
    date_updated: {
        type: Date,
        default: Date.now
    }
});

FilmSchema.pre('save', next => {
    if (this.isNew || this.isModified) {
        this.date_updated = Date.now();
    }
    return next();
});

module.exports = mongoose.model('Film', FilmSchema);
