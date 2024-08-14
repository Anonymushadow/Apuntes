const express = require("express");
const app = express();

//settings
app.set("appName", "expressCouse");
app.set("PORT", 3000);
app.set("case sensitive routing", true);

//middlewares
//... midlewares a usar

//routes
app.get("/", (req, res)=> {
    res.send("Welcome");
})

app.get("/Username", (req, res)=> {
    res.send("Username");
})


const PORT = app.get("PORT");
app.listen(PORT, ()=> {
    console.log(app.get("appName") + " iniciada en el puerto " + PORT);
})