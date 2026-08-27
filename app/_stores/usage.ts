import { create } from 'zustand';
import {produce} from "immer";
import {Usage} from "@/app/_types/types";
export const useUsageStore = create<Usage>((set, get) => ({
    showMenu: 'initial',
    setShowMenu: (menuState:string) => set({showMenu: menuState}),
    showModal: {
        show: false,
        text: 0
    },
    showModalBio: (n:number) => {
        set(
            produce((state) => {
                state.showModal.show = n !== 0;
                state.showModal.text = n;
                console.log(JSON.stringify(state.showModal))
            })
        )
    }
}))