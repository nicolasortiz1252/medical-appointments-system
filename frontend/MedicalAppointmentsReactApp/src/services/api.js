const API_URL = import.meta.env.VITE_API_URL;

export async function apiRequest(endpoint, options = {}) {

  const response = await fetch(`${API_URL}${endpoint}`, {
    headers: {
      "Content-Type": "application/json",
    },
    ...options,
  });

  if (!response.ok) {
    throw new Error("Error en la petición");
  }

  return await response.json();

}