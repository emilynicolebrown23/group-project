const mongoose = require("mongoose")
const Schema = mongoose.Schema


// Blueprint for what JSON Data should look like. 
const shelterListSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    address: {
        street: String,
        city: String,
        state: String
    },
    phone: {
        type: Number,
        required: true
    },
    description: String,
    website: {
        type: String
    },
    shelterImgUrl: String
    
})



            // Collection = Shelter v
module.exports = mongoose.model("Shelter", shelterListSchema)