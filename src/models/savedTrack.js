var mongoose = require('mongoose');

const SavedTrackSchema = mongoose.Schema({
    trackName: {
        type: String,
        required: true
    },
    artistName: {
        type: String,
        required: true
    },
    dateAdded: {
        type: Date,
        required: false
    }
});

const Track = module.exports = mongoose.model('Track', SavedTrackSchema);