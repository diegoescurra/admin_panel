const URL = import.meta.env.VITE_URL || "http://localhost:3000/";

export async function fetchInventory(id) {
  try {
    const res = await fetch(`${URL}inventario/${id}`);
    if (res.ok) {
      const json = await res.json();
      return json;
    }
  } catch (error) {
    console.log(error);
  }
}
