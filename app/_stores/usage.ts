import { create } from 'zustand';
import {produce} from "immer";
import {Usage} from "@/app/_types/types";
export const useUsageStore = create<Usage>((set, get) => ({
    showMenu: 'initial',
    setShowMenu: (menuState:string) => set({showMenu: menuState})
}))