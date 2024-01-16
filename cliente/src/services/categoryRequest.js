const URL = 'http://localhost:3000/categorias';

export async function fetchCategorys() {
    try {
        const res = await fetch(URL);
        const json = await res.json();
        return json;
    } catch (error) {
        console.log(error)
    }
}