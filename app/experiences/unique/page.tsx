'use client'
import data from "@/utils/experiences.json"
import SingleExperienceCard from "@/app/_components/SingleExperienceCard";
import Filter from "@/app/_components/Filter";
import {useState} from "react";
import {useFilterStore} from "@/app/_stores/filter";

export default function UniqueExperiences() {
    const filters = useFilterStore((state) => state.filters);
    const arrData = [...data.cycling, ...data.luthiery];
    const uniqueExp = arrData.filter(el => el.tipo === 'UN');
    const [displayedExp, setDisplayedExp] = useState(uniqueExp);

    return (
        <>
            <section className="mt-[79px] fadein-slower">
                <div
                    className="flex flex-col gap-20 w-[90vw] md:w-[80vw] mx-auto justify-center px-4 md:px-8 pt-20 pb-24">
                    <div className="flex flex-col gap-4 w-full">
                        <p className="text-sm w-2/4"><span className="font-semibold">Home / Esperienze /</span> Uniche</p>

                        <div className="flex gap-4 my-8">
                            <div className="w-2/4">
                                <h2 className="font-bold text-4xl">Cosa significa <br/>
                                    <span className="pt-2 inline-block">Esperienze Uniche</span>
                                </h2>
                            </div>

                            <div className="w-2/4">
                                <p>Se cerchi qualcosa di speciale, qui trovi il lato più autentico del territorio.
                                    Sono esperienze che uniscono storia e arte, musica e gastronomia, natura e paesaggio. Ogni proposta è pensata per farti entrare davvero nell’atmosfera cremonese, con dettagli curati e incontri autentici.
                                    Porti a casa un ricordo pieno, non solo una visita
                                </p>
                            </div>
                        </div>

                    </div>


                    <div className="flex flex-wrap gap-4 w-full">
                            {
                                displayedExp.map((el, i) => {
                                    return (
                                        <SingleExperienceCard key={el.titolo} el={el} grid={true}/>
                                    )
                                })
                            }
                    </div>
                </div>

            </section>
        </>
    )
}