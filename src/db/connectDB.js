const mongoose = require("mongoose");

const connectDB = () => {
    const mongooseOptions = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
    return mongoose.connect(process.env.MONGODB_URI , mongooseOptions )
}

module.exports = connectDB ; 