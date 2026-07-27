import { apiRequest } from "./api";

  export async function login(email, password) {

    try {
      const data = await apiRequest("/api/Auth/login", {
        method: "POST",
        body: JSON.stringify({
        Email: email,
        Password: password,
        }), 
      });
        console.log(data);
      return data;
      
    } catch(error) {
    throw new Error("Usuario o Contraseña Incorrectos")
    }

  }