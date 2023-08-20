import { readable } from "svelte/store"

export let locations = readable([
    {
        name: 'Buenos Aires',
        address: 'buenosaires'
    },

    {
        name: 'New York',
        address:'newyork'
    },

    {
        name: 'Lisboa',
        address:'lisboa'
    },

    {
        name: 'Londres',
        address:'londres'
    },

    {
        name: 'Tokyo',
        address:'tokyo'
    }
])

export let coordinateCities = readable({
    'buenosaires': {
        lat: -34.61315,
        lon: -58.37723
    },
    'newyork': {
        lat: 40.71427,
        lon: -74.00597
    },
    'lisboa': {
        lat: 38.7166700,
        lon: -9.1333300
    },
    'londres': {
        lat: 51.5074,
        lon: -0.1278
    },
    'tokyo': {
        lat: 35.6895,
        lon: 139.6917
    }
})