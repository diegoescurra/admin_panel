const URL =  import.meta.env.VITE_URL || "http://localhost:3000/";


export async function fetchDashboard() {
    try {
        const res = await fetch(URL + "dashboard");
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