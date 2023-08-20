export default async function (lat, lon) {
    const urlApi = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=a4ec222c1a03b346eaf67a97e8ef6f81&lang=es`

    const resp = await fetch(urlApi)
    const data = await resp.json()

    if (data) {
        return data
    }
}