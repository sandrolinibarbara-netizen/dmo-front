import InfoCard from "@/app/_components/InfoCard";

export default function BikeFriendly() {
    return (
        <>
            <section className="mt-[79px] fadein-slower">
                <div className="w-[90vw] md:w-[80vw] mx-auto items-center justify-center px-4 md:px-8 pt-20 pb-24">
                    <p className="text-sm"><span className="font-semibold">Home / Scopri il territorio / Cicloturismo /</span> Strutture
                        Bike-friendly
                    </p>
                    <h2 className="font-bold text-4xl mt-10 mb-8">Strutture Bike-friendly</h2>


                    <div className="flex gap-4 flex-wrap">
                        <InfoCard
                            name="Bed & Bike Cremona"
                            address="Via Roma 90 - Crotta D’Adda (CR)"
                            phone="+39 331 7914435"
                            email="info@bedandbikecremona.it"
                            url="https://nextjs.org/docs/app/guides/mdx"
                        >
                        </InfoCard>

                        <InfoCard
                            name="Velo & Relax Cremona"
                            address="Piazza Virgiliana - 26100 Cremona (CR)"
                            phone="+39 0376 28899"
                            email="info@veloerelax.it"
                            url="https://nextjs.org/docs/app/guides/mdx"
                        >
                        </InfoCard>

                        <InfoCard
                            name="Bici & Natura"
                            address="Viale Rimembranze - 26100 Cremona (CR)"
                            phone="+39 0371 420876"
                            email="info@bicieNatura.it"
                            url="https://nextjs.org/docs/app/guides/mdx"
                        >
                        </InfoCard>
                    </div>
                </div>
            </section>

        </>
    )
}