import unfetch from "unfetch";

//realizar peticion get
unfetch("https://api.example.com/data")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Error de red o servidor");
    }
    return response.json();
  })
  .then((data) => {
    // Hacer algo con los datos obtenidos
    console.log(data);
  })
  .catch((error) => {
    // Manejar errores
    console.error(error);
  });

//realizar peticion post
import unfetch from "unfetch";

const postData = {
  username: "usuario",
  password: "contraseña",
};

unfetch("https://api.example.com/login", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(postData),
})
  .then((response) => {
    if (!response.ok) {
      throw new Error("Error de red o servidor");
    }
    return response.json();
  })
  .then((data) => {
    // Hacer algo con los datos obtenidos después de la solicitud POST
    console.log(data);
  })
  .catch((error) => {
    // Manejar errores
    console.error(error);
  });

//realizar peticion put
unfetch("https://api.example.com/login", {
  method: "PUT",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(postData),
})
  .then((response) => {
    if (!response.ok) {
      throw new Error("Error de red o servidor");
    }
    return response.json();
  })
  .then((data) => {
    // Hacer algo con los datos obtenidos después de la solicitud POST
    console.log(data);
  })
  .catch((error) => {
    // Manejar errores
    console.error(error);
  });

//realizar peticion delete
unfetch(`https://api.example.com/resource/${resourceId}`, {
  method: "DELETE",
})
  .then((response) => {
    if (!response.ok) {
      throw new Error("Error de red o servidor");
    }
    return response.json();
  })
  .then((data) => {
    // Hacer algo con los datos de respuesta (si es necesario)
    console.log(data);
  })
  .catch((error) => {
    // Manejar errores
    console.error(error);
  });

//manejar encabezado de la repsuest
import unfetch from "unfetch";

unfetch("https://api.example.com/data")
  .then((response) => {
    const contentType = response.headers.get("Content-Type");
    console.log(`Tipo de contenido: ${contentType}`);
    return response.json();
  })
  .then((data) => {
    // Hacer algo con los datos y encabezados de respuesta
    console.log(data);
  })
  .catch((error) => {
    // Manejar errores
    console.error(error);
  });

//manejar errores del server
import unfetch from "unfetch";

unfetch("https://api.example.com/data")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Error de red o servidor");
    }
    return response.json();
  })
  .then((data) => {
    // Hacer algo con los datos obtenidos
    console.log(data);
  })
  .catch((error) => {
    // Manejar errores
    console.error(error);
  });
