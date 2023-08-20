export let kelvinToCelcius = (tempInKelvin) => {
    const difKelCel = 273.15 // diferencia kelvin a celcius
    const temperature = tempInKelvin - difKelCel
    return Number(temperature.toFixed(1))
}

export let mphToKmh = (velInMpH) => {
    const velInKmH = velInMpH * 1.60934
    return Number(velInKmH.toFixed(1))
}

export let miToKm = (Mi) => {
    const km = (Mi * 1.60934) / 1000
    return Number(km.toFixed(1))
}