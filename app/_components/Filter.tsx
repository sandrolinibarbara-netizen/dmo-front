'use client'
import {Dialog} from "@/app/_components/Dialog";
import {useFilterStore} from "@/app/_stores/filter";

export default function Filter({exp, search} : {exp:boolean, search:() => void}) {
    const setFilter = useFilterStore((state) => state.setFilter);
    const filters = useFilterStore((state) => state.filters);

    return (
        <div className={`${exp ? 'w-full' : 'w-[40%]'}`}>
            {exp &&
                <div className="w-full flex justify-between gap-4 mb-4">
                    <button type="button" value="classic" onClick={(e) => setFilter('type', e.currentTarget.value)}
                            className={`${filters.type === 'classic' ? 'border-corpo-orange' : 'border-transparent'} border-2 overflow-x-auto text-ellipsis text-sm bg-white w-[calc(30%-16px)] text-center px-4 py-3 rounded-full cursor-pointer`}>Classiche</button>
                    <button type="button" value="contemp" onClick={(e) => setFilter('type', e.currentTarget.value)}
                            className={`${filters.type === 'contemp' ? 'border-corpo-orange' : 'border-transparent'} border-2 overflow-x-auto text-ellipsis text-sm bg-white w-[calc(45%-16px)] text-center px-4 py-3 rounded-full cursor-pointer`}>Contemporanee</button>
                    <button type="button" value="unique" onClick={(e) => setFilter('type', e.currentTarget.value)}
                            className={`${filters.type === 'unique' ? 'border-corpo-orange' : 'border-transparent'} border-2 overflow-x-auto text-ellipsis text-sm bg-white w-[calc(25%-16px)] text-center px-4 py-3 rounded-full cursor-pointer`}>Uniche</button>
                </div>
            }

            <div className="w-full flex justify-between gap-4 mb-4">
                <Dialog placeholder="Dal"/>
                <Dialog placeholder="Al"/>
            </div>

            <div>
                <select value={filters.category} onChange={(e) => setFilter('category', e.target.value)}
                        className="sf-select w-full rounded-full border border-gray-500 px-4 py-3">
                    <option value="" disabled>Categoria</option>
                    <option value="all">Tutte</option>
                    <option value="cycling">Cicloturismo</option>
                    <option value="luthiery">Musica e liuteria</option>
                </select>
            </div>

            <button type="button" onClick={search}
                    className="cursor-pointer mt-4 w-full text-black transition duration-500 hover:bg-corpo-orange bg-soft-orange rounded-full px-4 py-3">Cerca</button>

        </div>
    )
}