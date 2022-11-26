const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()
const http = require('http')
const router = require('./routes/users')
const server = http.createServer(app)

// app.use(cors)
app.use(express.json())

if (process.env.NODE_ENV !== "production") {
    require("dotenv").config();
}

// Connect to mongoose
const mongo_URI = process.env.MONGO_URI;

mongoose
    .connect(mongo_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("MongoDB connected..."))
    .catch((err) => console.log(err));

// Routes
app.use("/users", require("./routes/users"));

// //Serve Static Assets
// if (process.env.NODE_ENV === "production") {
//     //Set Static folder
//     app.use(express.static("client/build"));

//     app.get("*", (req, res) => {
//         res.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
//     });
// }

const port = process.env.PORT || 4999
server.listen(port, () => {
    console.log(`Server running on port ${port}`);
});