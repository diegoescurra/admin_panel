const URL = "http://localhost:3000/dashboard";


export async function fetchDashboard() {
    try {
        const res = await fetch(URL);
        if(res.ok){
            const json = await res.json();
            return json
        } else {
            throw new Error()
        }

    } catch (error) {
        console.log(error)
    }
}