export async function login(username, password) {
  
  const response = await fetch(`${import.meta.env.VITE_API_URL}/auth/login`, {
    
    method: "POST",
    headers: {
      "Content-Type": "application/json",

    },
      body: JSON.stringify({
        username,
        password,
      }),

  });

  if (!response.ok) {
    throw new Error("Usuario o Contraseña incorrectos")
  }

  const data = await response.json();

  return {
    id: data.id,
    username: data.username,
    name: `${data.firstName} ${data.lastName}`,
    email: data.email,
    image: data.image,
    token: data.accessToken,
  };

}