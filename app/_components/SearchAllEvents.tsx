'use client'
import {useEffect, useState} from "react";
import {useFilterStore} from "@/app/_stores/filter";
import FilterEvents from "@/app/_components/FilterEvents";
import Event from "@/app/_components/Event";

export default function SearchAllEvents({events}:{events:any}) {
    const filters = useFilterStore((state) => state.filters);
    const [filteredEvents, setFilteredEvents] = useState();
    useEffect(() => {
        const filtered = events.filter(el => (new Date()).getTime() < (new Date(el.dates.endDate)).getTime())
        setFilteredEvents(filtered)
    }, [])

    function applyFilters() {

        let filtered;

        if(filters.start) {

                filtered = events.filter(el => {
                    if((new Date(el.dates.startDate)).getTime() === (new Date(el.dates.endDate)).getTime()) {
                        return (new Date(el.dates.startDate)).getTime() >= (new Date(filters.start)).getTime()
                    } else {
                        return (new Date(el.dates.endDate)).getTime() >= (new Date(filters.start)).getTime();
                    }
                });
        }

        if(filters.start && filters.end) {
            filtered = filtered.filter(el => {
                return (new Date(el.dates.endDate)).getTime() >= (new Date(filters.end).getTime());
            });
        } else if (filters.end) {
                filtered = events.filter(el => {
                    if((new Date(el.dates.startDate)).getTime() === (new Date(el.dates.endDate)).getTime()) {
                        return (new Date(el.dates.endDate)).getTime() <= (new Date(filters.end).getTime())
                    } else {
                        return (new Date(el.dates.startDate)).getTime() <= (new Date(filters.end).getTime());
                    }
                });
        }

        setFilteredEvents(filtered);
    }

    return (
        <div
            className="flex flex-col gap-20 w-[95vw] md:w-[80vw] mx-auto justify-center px-4 md:px-8 pt-20 pb-24">
            <div className="flex flex-col gap-2 w-full">
                <p className="text-sm"><span className="font-semibold">Home /</span> Eventi</p>
                <h2 className="font-bold text-4xl my-8">Eventi</h2>

                <FilterEvents search={applyFilters}/>

            </div>
            <div className="flex flex-wrap gap-4 w-full">
                {filteredEvents
                    ? filteredEvents.map((el) => {
                        return (
                            <Event key={el.identifier} event={el}/>
                        )
                    })
                    : <div className="h-[300px] w-full flex items-center justify-center">Loading...</div>
                }
            </div>
        </div>
    )
}