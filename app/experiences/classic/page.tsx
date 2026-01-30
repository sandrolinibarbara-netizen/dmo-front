'use client'
import data from "@/utils/experiences.json"
import SingleExperienceCard from "@/app/_components/SingleExperienceCard";
import Filter from "@/app/_components/Filter";
import {useState} from "react";
import {useFilterStore} from "@/app/_stores/filter";

export default function ClassicExperiences() {
    const filters = useFilterStore((state) => state.filters);
    const arrData = [...data.cycling, ...data.luthiery];
    const classicExp = arrData.filter(el => el.tipo === 'CL');
    const [displayedExp, setDisplayedExp] = useState(classicExp);

    function applyFilters() {
        const newArr = [...classicExp];
        let filtered;

        switch(filters.category) {
            case 'cycling':
                filtered = newArr.filter(el => el.categoria === 'cycling');
                break;
            case 'luthiery':
                filtered = newArr.filter(el => el.categoria === 'luthiery');
                break;
            default:
                filtered = newArr;
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
                    className="flex flex-col gap-20 w-[90vw] md:w-[80vw] mx-auto justify-center px-4 md:px-8 pt-20 pb-24">
                    <div className="flex flex-col gap-4 w-full">
                        <p className="text-sm w-2/4"><span className="font-semibold">Home / Esperienze /</span> Classiche</p>

                        <div className="flex gap-20 my-8">
                            <div className="w-[40%]">
                                <h2 className="font-bold text-4xl break-title">Esperienze Classiche</h2>
                            </div>

                            <div className="w-[60%] pl-2">
                                <p>
                                    <span className="font-semibold block pb-2">Proposte a partenza garantita</span>
                                    Vuoi conoscere l’anima di Cremona? Parti dai suoi luoghi simbolo.
                                    Visita i monumenti principali e i musei, entra nei palazzi e nelle dimore storiche della città. Scopri la musica e la liuteria che hanno reso Cremona famosa nel mondo.
                                    Le visite guidate sono disponibili tutto l’anno e ti accompagnano in un percorso imperdibile, con un ritmo adatto a tutti.

                                </p>
                            </div>
                        </div>

                    </div>


                    <div className="flex gap-20 w-full">
                        <Filter exp={false} search={applyFilters}/>
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
                </div>

            </section>
        </>
    )
}