import {createContext} from "react";

export const ToolTypeContext = createContext<'ranking' | 'party'>('ranking');