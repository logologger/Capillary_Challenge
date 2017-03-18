'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var GameDataSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    platform: {

        type: String,
        required: true

    },
    score: {

        type: String,
        required: true
    },
    genre: {
        type: String

    },
    editors_choice: {
        type: String,
        required: true
    }
}, {
    collection: 'GameData',
    timestamps: true
});


module.exports = mongoose.model('GameData', GameDataSchema);
