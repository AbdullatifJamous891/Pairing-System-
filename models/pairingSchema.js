const mongoose = require('mongoose');

const pairingSchema = mongoose.Schema({
    student1: { type: String },
    student2: { type: String }
})

module.exports = mongoose.model('pairing', pairingSchema);
