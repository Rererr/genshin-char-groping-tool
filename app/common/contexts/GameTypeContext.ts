import {createContext} from "react";

export const GameTypeContext = createContext<'genshin' | 'hsr'>('genshin');