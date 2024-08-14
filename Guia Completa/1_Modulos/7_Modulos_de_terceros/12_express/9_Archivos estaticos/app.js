const express = require("express");
const app = express();

//ubicacion de los archivo estaticos
app.use(express.static("./static"));

app.get("/", (req, res)=> {
    res.send("Welcome");
})



const PORT = 3000;
app.listen(PORT, ()=> {
    console.log(app.get("appName") + " iniciada en el puerto " + PORT);
})