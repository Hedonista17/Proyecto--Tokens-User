// Es en este archivo donde realizamos las consultas/fecth para el endpoint de usuario


import { URL } from ".";
const HEADERS = {
    "Content-Type" : "application/json",
}


// este parametro user es el parametro que pasamos en en registro.jsx como registro del useState 
// body: el cuerpo de la peticion que vamos a enviar, los datos como parametros

export const registerUser = async (user) => {   
  try {
    const response = await fetch(`${URL}/user/register`,{
        method : "POST",
        headers: HEADERS,
        body: JSON.stringify(user), 
    });
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("Error al registrar el usuario", error);
  }
};

export const loginUser = async (user) => {
    try {
      const response = await fetch(`${URL}/user/login`, {
        method: "POST",
        headers: HEADERS,
        body: JSON.stringify(user),
      });
      const data = await response.json();
      localStorage.setItem("token", data.token); 
    } catch (error) {
      console.log("Error al iniciar sesión", error);
    }
  };
  
// localStorage es para guardar el dato de token lo encontramos en la consola en aplication