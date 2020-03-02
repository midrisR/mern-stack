const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.DB_CONNECT, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log(`connect to db : ${conn.connection.host}`.blue.bold)
    } catch (error) {
        console.log(`Error: ${error.message}`.red);
        process.exit(1);
    }
}

module.exports = connectDB