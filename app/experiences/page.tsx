'use client'
import data from "@/utils/experiences.json"
import SingleExperienceCard from "@/app/_components/SingleExperienceCard";
import Filter from "@/app/_components/Filter";
import {useState} from "react";
import {useFilterStore} from "@/app/_stores/filter";

export default function Experiences() {
    const filters = useFilterStore((state) => state.filters);
    const arrData = [...data.cycling, ...data.luthiery];
    const [displayedExp, setDisplayedExp] = useState(arrData);

     function applyFilters() {
         const newArr = [...arrData];
         let filtered;
         switch(filters.type) {
             case 'unique':
                 filtered = newArr.filter(el => el.tipo === 'UN');
                 break;
             case 'classic':
                 filtered = newArr.filter(el => el.tipo === 'CL');
                 break;
             case 'contemp':
                 filtered = newArr.filter(el => el.tipo === 'CO');
                 break;
             default:
                 filtered = newArr;
         }

         switch(filters.category) {
             case 'cycling':
                 filtered = filtered.filter(el => el.categoria === 'cycling');
                 break;
             case 'luthiery':
                 filtered = filtered.filter(el => el.categoria === 'luthiery');
                 break;
             default:
         }

         if(filters.start) {
             filtered = filtered.filter(el => new Date(el.data).getTime() >= new Date(filters.start).getTime());
         }

         if(filters.end) {
             filtered = filtered.filter(el => new Date(el.data).getTime() <= new Date(filters.end).getTime());
         }

         setDisplayedExp(filtered);

     }

    return (
        <>
            <section className="mt-[79px] fadein-slower">
                <div
                    className="flex gap-20 w-[90vw] md:w-[80vw] mx-auto justify-center px-4 md:px-8 pt-20 pb-24">
                    <div className="flex flex-col gap-2 w-[40%]">
                        <p className="text-sm"><span className="font-semibold">Home /</span> Esperienze</p>
                        <h2 className="font-bold text-4xl my-8">Esperienze</h2>

                        <Filter exp={true} search={applyFilters}/>

                    </div>
                    <div className="flex flex-wrap gap-4 w-[60%]">
                        {
                            displayedExp.map((el, i) => {
                                return (
                                    <SingleExperienceCard key={el.titolo} el={el} grid={false} altGrid={true}/>
                                )
                            })
                        }
                    </div>
                </div>

            </section>
        </>
    )
}