import { readable } from 'svelte/store';

async function getUserCoordinates() {
    return new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(position => {
                resolve({
                    lat: position.coords.latitude,
                    lon: position.coords.longitude
                });
            }, err => { reject(err) });
    });
}

export let crdPackage;

getUserCoordinates()
    .then(crd => {
        crdPackage = readable(crd);
    })
    .catch(error => {
        console.error(error);
    });