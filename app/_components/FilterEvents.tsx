'use client'
import {Dialog} from "@/app/_components/Dialog";
import {useFilterStore} from "@/app/_stores/filter";

export default function FilterEvents({search} : {search:() => void}) {

    return (
        <div className="w-full flex items-center gap-8">
            <fieldset aria-label="Scegli le date dell'evento" className="w-full flex justify-between gap-4">
                <Dialog placeholder="Dal"/>
                <Dialog placeholder="Al"/>
            </fieldset>

            <button type="button" onClick={search}
                    className="cursor-pointer w-full text-black transition duration-500 hover:bg-corpo-orange bg-soft-orange rounded-full px-4 py-3">Cerca</button>

        </div>
    )
}