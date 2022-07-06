import { writable } from 'svelte/store'

// export const persistStore = (key, initial) => {
//     const persist = localStorage.getItem(key)
//     const data = persist ? JSON.parse(persist) : initial
//     const store = writable(data, () => {
//         const unsubscribe = store.subscribe(value => {
//             localStorage.setItem(key, JSON.stringify(value))
//         })
//         return unsubscribe
//     })
//     return store
// }

export function persistStorage(key, value) {
    localStorage.setItem(key, value);
}

export function getStorage(key) {
    return localStorage.getItem(key);
}

export function storageExists(key) {
    return localStorage.getItem(key) != null
}