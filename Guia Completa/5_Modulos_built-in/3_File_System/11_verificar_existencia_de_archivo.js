const fs = require("fs");

const url = "datos.txt";

if (fs.existsSync(url)) {
    console.log("Existe");
  } else {
    console.log("NO Existe");
  }
  