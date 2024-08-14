const axios = require("axios");

//peticion get
axios
  .get("https://api.example.com/data")
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });

//peticion post
axios
  .post("https://api.example.com/post-data", { key: "value" })
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });

//peticion put
axios
  .put("https://api.example.com/update-data", { key: "new-value" })
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });

//peticion delete
axios
  .delete("https://api.example.com/delete-resource")
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });

//enviar peticiones mas completas
axios({
  method: "post",
  url: "/user/12345",
  data: {
    firstName: "Fred",
    lastName: "Flintstone",
  },
});

//ejecutar configuraciones antes de recibir una peticion
axios.interceptors.request.use((config) => {
  config.headers.Authorization = "Bearer token"; // Agrega un encabezado de autorización
  return config;
});

//ejecutar configuracion despues de recibir una respuesta
axios.interceptors.response.use(
  (response) => {
    // Manejar la respuesta
    return response;
  },
  (error) => {
    // Manejar el error
    return Promise.reject(error);
  }
);
