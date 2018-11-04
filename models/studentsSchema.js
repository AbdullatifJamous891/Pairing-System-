const mongoose = require('mongoose');

const studentsSchema = mongoose.Schema({
    name: { type: String },
    level: { type: Number }
});

module.exports = mongoose.model('students', studentsSchema);
