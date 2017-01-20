const mongoose = require('mongoose');
const robotSchema = new mongoose.Schema({
    hostnmae: String,
    opc: Boolean
});
mongoose.model('Robot', robotSchema);
