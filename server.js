const path = require("path");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const morgan = require("morgan");
const colors = require("colors");

const authRoute = require("./routes/auth");
const postRoute = require("./routes/posts");
const TransactionPost = require("./routes/transaction");

const connectDB = require("./config/db");

dotenv.config();

const port = process.env.PORT || 5000
// connec to database
connectDB();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());


if (process.env.NODE_ENV === 'development') {
    app.use(morgan("dev"))
}

app.use("/api/v1", authRoute);
app.use("/api/v1/posts", postRoute);
app.use("/api/v2/", TransactionPost);

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'))
    app.get('*', (req, res) =>
        res.sendfile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    )
}




app.listen(port, () => console.log(`Server running in ${process.env.NODE_ENV} mode on port ${port}`.yellow.bold));
