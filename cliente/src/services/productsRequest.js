const URL = import.meta.env.VITE_URL || "http://localhost:3000/";

export async function fetchProducts() {
  try {
    const res = await fetch(URL + "productos");
    if (res.ok) {
      const json = await res.json();
      return json;
    } else {
      throw new Error();
    }
  } catch (error) {
    console.log(error);
  }
}

export async function insertProducts(data) {
  try {
    const res = await fetch(URL + "productos", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(data),
    });
    if (res.ok) {
      const json = await res.json();
      return json;
    } else {
      throw new Error();
    }
  } catch (error) {
    console.log(error);
  }
}

export async function updateProducts(data) {
  try {
    const res = await fetch(URL + "productos", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "PUT",
      body: JSON.stringify(data),
    });
    if (res.ok) {
      const json = await res.json();
      return json;
    } else {
      const errorInfo = await res.text()
      throw new Error(`Error ${res.status}: ${errorInfo}`);
    }
  } catch (error) {
    console.log(error);
  }
}
