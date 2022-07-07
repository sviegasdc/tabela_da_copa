import { persistStore } from '$lib/api/persistStore.js';
import jogos from '$lib/api/jogos.json';

const defaultData = [...jogos];

export const store = persistStore('data', defaultData);
