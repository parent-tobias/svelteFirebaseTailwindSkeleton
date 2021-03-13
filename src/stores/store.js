import {writable} from 'svelte/store';
import {localStore} from './localStore';

import { initAuth } from '../auth/index';

export const auth = initAuth(); 

export const menuOption = localStore("menu-option", "Main");

export const darkMode = localStore("tailwind-darkmode", true);
export const storedUser = writable({realName:"",photoURL:"", email: ""})