async function obtenerData(){
    const response = await fetch("http://127.0.0.1:5500/Codigo369/08-data.json");
    const json = await response.text();
    console.log(JSON.parse(json))
}

obtenerData();