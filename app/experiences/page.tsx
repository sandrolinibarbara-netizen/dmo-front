import {getExperiences} from "@/app/lib/domnia-experiences";
import SearchAllExperiences from "@/app/_components/SearchAllExperiences";

export default async function Experiences() {

    const pages = await getExperiences('/experiences');

    return (
        <>
            <section className="mt-[79px] fadein-slower">
                <SearchAllExperiences pages={pages}/>
            </section>
        </>
    )
}
