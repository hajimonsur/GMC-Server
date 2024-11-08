const express = require("express");
const mongoose = require("mongoose");
const port = 3030;
const studentRoute = require("./routes/studentroute");


// connect to mongodb
mongoose.connect("mongodb+srv://HajiMonsur:Adeshina@hajimonsur.fmgoo.mongodb.net/gmchighschooldatabase?retryWrites=true&w=majority&appName=HajiMonsur")
    .then(() => {
        console.log("MongoDB Server Connected");
        
const app = express();

// middleware
app.use(express.json());

// routes
app.use("/api", studentRoute);

// listen to port
app.listen(3030, () => {
    console.log(`Server started on port http://localhost:${port}/api/`);
});
    })
    .catch((err) => {
        console.log(err);
    });



