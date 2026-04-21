'use client'
import {useEffect, useState} from "react";
import Filter from "@/app/_components/Filter";
import SingleExperienceCard from "@/app/_components/SingleExperienceCard";
import {useFilterStore} from "@/app/_stores/filter";

export default function SearchTaggedExperiences({pages, type}:{pages:any, type:string}) {

    const filters = useFilterStore((state) => state.filters);
    const [filteredExperiences, setFilteredExperiences] = useState();

    let expToDisplay;
    switch(type) {
        case 'classic':
            expToDisplay = 4;
            break;
        case 'contemporary':
            expToDisplay = 5;
            break;
        default:
            expToDisplay = 1;
    }

    useEffect(() => {
        setFilteredExperiences(pages.filter((el:any) => el.tagIds.includes(expToDisplay)))
    }, [])

    function applyFilters() {

        let filtered;

        switch(filters.category) {
            case 'cycling':
                filtered = pages.filter((el:any) => el.tagIds.includes(3) && el.tagIds.includes(expToDisplay));
                break;
            case 'luthiery':
                filtered = pages.filter((el:any) => el.tagIds.includes(2) && el.tagIds.includes(expToDisplay));
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
        <div className="flex flex-col md:flex-row gap-20 w-full">
            {type !== 'unique' && <Filter exp={false} search={applyFilters}/>}
            <div className="flex flex-wrap gap-4 w-full md:w-[60%]">
                {filteredExperiences &&
                    filteredExperiences.map((el, i: number) => {
                        if (i < 3) {
                            return (
                                <SingleExperienceCard key={el.documentId} el={el} grid={false} altGrid={true}/>
                            )
                        }
                    })
                }
            </div>
        </div>
    )
}