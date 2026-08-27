import { create } from 'zustand';
import {produce} from "immer";
export const useFilterStore = create((set, get) => ({
    filters: {
        type:undefined,
        start: undefined,
        end: undefined,
        category: "",
    },
    setFilter: (prop:string, value:string) => {
        set(
            produce((state) => {
                state.filters[prop] = value;
            })
        )
    }
}))