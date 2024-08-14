const express = require("express");

const router = express.Router();

router.get("/users", (req, res)=> {
    res.send("Usuarios");
})

router.post("/users", (req, res)=> {
    res.send("Usuario añadido");
})

module.exports = router;