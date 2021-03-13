import { writable, get } from 'svelte/store';

export const localStore = (key, initialValue) => {
  /* conversion helpers */
  const toString = (value) => JSON.stringify(value, null, 2);
  const toObj = JSON.parse;

  if(localStorage.getItem(key) === null){
    localStorage.setItem(key, toString(initialValue))
  }
  const saved = toObj(localStorage.getItem(key));
  const store = writable(saved);
  const { subscribe, set } = store;

  const localStore =  {
    subscribe,
    set: (value) => {
      localStorage.setItem(key, toString(value));
      return set(value);
    },
    update: (fn)=>{
      const value = fn(get(store));
      localStore.set(value);
    }
  }
  return localStore;

}