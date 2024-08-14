const express = require("express");
const app = express();

const userRoute = require("./routes/users");
const dashBoardRoute = require("./routes/dashboard");

app.use(userRoute);
app.use(dashBoardRoute);


app.get("/", (req, res)=> {
    res.send("Welcome");
})


const PORT = 3000;
app.listen(PORT, ()=> {
    console.log("OK");
})