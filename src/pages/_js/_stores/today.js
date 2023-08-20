import { writable } from 'svelte/store'
import getDate from '../getDate'

const intervalTime = 1000 * 60 * 60 * 3 // 3hs

export let today = writable(getDate())

  setInterval(() => {
    today.set(getDate())
  }, intervalTime)