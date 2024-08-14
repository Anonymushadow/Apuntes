const express = require("express");
const app = express();

//peticiones GET
app.get("/productos", (req, res)=> {
    res.send("Lista de productos");
});

//peticiones POST
app.post("/productos", (req, res)=> {
    res.send("Creando productos");
});

//peticiones PUT
app.put("/productos", (req, res)=> {
    res.send("Actualizando productos");
});

//peticiones DELETE
app.delete("/productos", (req, res)=> {
    res.send("Eliminando productos");
});

//peticiones PATCH
app.patch("/productos", (req, res)=> {
    res.send("Modificando una parte del producto");
});



app.use((req, res)=> {
    res.status(404).send("404");
})

app.listen(3000, ()=>{});