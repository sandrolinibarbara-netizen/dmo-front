import SingleExperienceCard from "@/app/_components/SingleExperienceCard";

export default function FilteredExperiences({type, pages}:{type:string, pages:any}) {

    return (

        <div className="hidden md:flex flex-col gap-2">
            {pages &&
                pages.filter((el: any) => el.tagIds.includes(1)).map((el: any, i: number) => {
                    if (i < 3) {
                        return (
                            <SingleExperienceCard key={el.documentId} el={el} grid={false}/>
                        )
                    }
                })
            }
        </div>
    )
}