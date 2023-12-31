const connectToMongo = require("./db");
const express = require("express");
const cors = require("cors");

connectToMongo();
const app = express();
const port = 8000;

app.use(express.json());
app.use(cors());

// available routes
app.use("/api/auth", require("./routes/auth"))

// Listening on this port
app.listen(port, ()=>{
    console.log(`VisionVault backend running at http://localhost:${port}`)
})
