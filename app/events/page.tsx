import getEvents from "@/app/lib/edt-events";
import SearchAllEvents from "@/app/_components/SearchAllEvents";

export default async function Events() {

    const data = await getEvents('/events');

    return (
        <>
            <section className="mt-[79px] fadein-slower">
                <SearchAllEvents events={data.events}/>
            </section>
        </>
    )
}
