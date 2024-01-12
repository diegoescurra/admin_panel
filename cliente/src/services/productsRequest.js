const URL = "http://localhost:3000/productos"

export async function fetchProducts() {
    const res = await fetch(URL);
    const json = await res.json();
    return json;
}


export async function insertProducts(data){
    const res = await fetch(URL, {
        headers: {
            "Content-Type" : "application/json"
        },
        method: "POST",
        body: JSON.stringify(data) 
    })
    const json = await res.json();
    return json;
}

export async function updateProducts(data) {
    const res = await fetch(URL, {
        headers: {
            "Content-Type" : "application/json"
        },
        method: 'PUT',
        body: JSON.stringify(data)
    }    
    )
    const json = await res.json();
    return json
}