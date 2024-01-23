const URL = "http://localhost:3000/categorias" || import.meta.env.URL;

export async function fetchCategories() {
  try {
    const res = await fetch(URL);
    if (res.ok) {
      const json = await res.json();
      return json;
    }
    throw new Error();
  } catch (error) {
    console.log(error);
  }
}

export async function insertCategory(data) {
  try {
    const res = await fetch(URL, {
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
      method: 'POST'
    });
    if (res.ok) {
      const json = await res.json();
      return json;
    }
    throw new Error();
  } catch (error) {
    console.log(error);
  }
}

export async function updateCategory(data) {
  try {
    const res = await fetch(URL, {
      headers: {
        "Content-Type" : "application/json",
      },
      body : JSON.stringify(data),
      method: 'PUT'
    })
    if ( res.ok ){
      const json = await res.json();
      return json
    }
    throw new Error()
  } catch (error) {
    console.log(error)
  }
}