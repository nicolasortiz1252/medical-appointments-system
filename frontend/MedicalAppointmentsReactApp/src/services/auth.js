import { apiRequest } from "./api";

  export async function login(username, password) {

    try {
      const data = await apiRequest("/auth/login", {
        method: "POST",
        body: JSON.stringify({
        username,
        password,
        }), 
      });

      return {
      id: data.id,
      username: data.username,
      name: `${data.firstName} ${data.lastName}`,
      email: data.email,
      image: data.image,
      token: data.accessToken,
      };
      
    } catch(error) {
    throw new Error("Usuario o Contraseña Incorrectos")
    }

  }