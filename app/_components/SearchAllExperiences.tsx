'use client'
import {useEffect, useState} from "react";
import Filter from "@/app/_components/Filter";
import SingleExperienceCard from "@/app/_components/SingleExperienceCard";
import {useFilterStore} from "@/app/_stores/filter";

export default function SearchAllExperiences({pages}:{pages:any}) {
    const filters = useFilterStore((state) => state.filters);
    const [filteredExperiences, setFilteredExperiences] = useState();
    useEffect(() => {
        setFilteredExperiences(pages)
    }, [])

    function applyFilters() {

        let filtered;
        switch(filters.type) {
            case 'unique':
                filtered = pages.filter((el:any) => el.tagIds.includes(6));
                break;
            case 'classic':
                filtered = pages.filter((el:any) => el.tagIds.includes(4));
                break;
            case 'contemp':
                filtered = pages.filter((el:any) => el.tagIds.includes(5));
                break;
            default:
                filtered = pages;
        }

        switch(filters.category) {
            case 'cycling':
                filtered = filtered.filter((el:any) => el.tagIds.includes(3));
                break;
            case 'luthiery':
                filtered = filtered.filter((el:any) => el.tagIds.includes(2));
                break;
            default:
        }

        // if(filters.start) {
        //     filtered = filtered.filter(el => new Date(el.base_price.start_date).getTime() >= new Date(filters.start).getTime());
        // }
        //
        // if(filters.end) {
        //     filtered = filtered.filter(el => new Date(el.base_price.end_date).getTime() <= new Date(filters.end).getTime());
        // }

        setFilteredExperiences(filtered);

    }

    return (
        <div
            className="flex flex-col md:flex-row gap-20 w-[95vw] md:w-[80vw] mx-auto justify-center px-4 md:px-8 pt-20 pb-24">
            <div className="flex flex-col gap-2 w-full md:w-[40%]">
                <p className="text-sm"><span className="font-semibold">Home /</span> Esperienze</p>
                <h2 className="font-bold text-4xl my-8">Esperienze</h2>

                <Filter exp={true} search={applyFilters}/>

            </div>
            <div className="flex flex-wrap gap-4 w-full md:w-[60%]">
                {filteredExperiences &&
                    filteredExperiences.map((el) => {
                        return (
                            <SingleExperienceCard key={el.documentId} el={el} grid={false} altGrid={true}/>
                        )
                    })
                }
            </div>
        </div>
    )
}