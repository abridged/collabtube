import { writable } from 'svelte/store';

export const AppStore = writable( {
    account: null
} );