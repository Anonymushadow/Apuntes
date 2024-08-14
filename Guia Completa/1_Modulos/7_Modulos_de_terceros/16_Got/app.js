const got = require("got");

//realizar peticiones
const response = await got("https://api.example.com/data");

//peticion post
const psotResponse = await got.post("https://api.example.com/submit", {
  json: { key: "value" },
});

//peticion put
const putResponse = await got.put("https://api.example.com/update", {
  json: { key: "new_value" },
});

//peticion delete
const deleteResponse = await got.delete("https://api.example.com/resource/123");

//obtener un streram de datos
const stream = got.stream("https://api.example.com/streaming-data");
stream.pipe(process.stdout);

//crear instancia con ajustes
const customGot = got.extend({
  headers: {
    Authorization: "Bearer token123",
  },
});
const responses = await customGot("https://api.example.com/private-data");

//paginacion
const paginationOptions = {
  transform: (response) => JSON.parse(response.body).items,
  paginate: (response, allItems, currentItems) => {
    if (allItems.length < 100) {
      return false; // Dejar de paginar
    }
    return got.get(response.headers.link.next);
  },
};
const allItems = await got.paginate(
  "https://api.example.com/items",
  paginationOptions
);

//Manejar reintentos
const retryOptions = {
  limit: 5, // Número máximo de intentos
  methods: ["GET"], // Método de solicitud permitido para reintentar
  statusCodes: [500], // Códigos de estado que deben intentarse nuevamente
};
const response2 = await got("https://api.example.com/unstable-endpoint", {
  retry: retryOptions,
});
