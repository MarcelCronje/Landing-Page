const mongoose = require("mongoose");
const settingsSchema = new mongoose.Schema({
    heroText: String,
    backgroundColor: String,
    logo: String,
});
module.exports = mongoose.model("Settings", settingsSchema);
