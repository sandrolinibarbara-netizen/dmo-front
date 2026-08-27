import getEvents, {sortEventsByStartDate} from "@/app/lib/edt-events";
import SearchAllEvents from "@/app/_components/SearchAllEvents";

export default async function Events() {

    const data = await getEvents('/events');
    const sortedEvents = sortEventsByStartDate(data.events ?? []);

    return (
        <>
            <section className="mt-[79px] fadein-slower">
                <SearchAllEvents events={sortedEvents}/>
            </section>
        </>
    )
}
