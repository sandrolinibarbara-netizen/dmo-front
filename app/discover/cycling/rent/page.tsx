import InfoCard from "@/app/_components/InfoCard";

export default function Rent() {
    return (
        <>
            <section className="mt-[79px] fadein-slower">
                <div className="w-[90vw] md:w-[80vw] mx-auto items-center justify-center px-4 md:px-8 pt-20 pb-24">
                    <p className="text-sm"><span className="font-semibold">Home / Scopri il territorio / Cicloturismo /</span> Strutture
                        per il noleggio
                    </p>
                    <h2 className="font-bold text-4xl mt-10 mb-8">Strutture per il noleggio</h2>


                <div className="flex gap-4 flex-wrap">
                        <InfoCard
                            name="Infopoint Cremona e Provincia"
                            address="Piazza del Comune n. 5 - 26100 Cremona"
                            phone="0372 407081"
                            email="info.turismo@comune.cremona.it "
                            url="https://nextjs.org/docs/app/guides/mdx"
                        >
                        <div className="flex gap-4 w-full">
                            <ul>
                                <li>Lunedi</li>
                                <li>Martedi</li>
                                <li>Mercoledi</li>
                                <li>Giovedi</li>
                                <li>Venerdi</li>
                                <li>Sabato</li>
                                <li>Domenica</li>
                            </ul>
                            <ul className="w-full">
                            <li className="text-ellipsis whitespace-nowrap overflow-x-auto">9:00 - 12:00 | 15:00 - 18:00</li>
                            <li className="text-ellipsis whitespace-nowrap overflow-x-auto">9:00 - 12:00 | 15:00 - 18:00</li>
                            <li className="text-ellipsis whitespace-nowrap overflow-x-auto">9:00 - 12:00 | 15:00 - 18:00</li>
                            <li className="text-ellipsis whitespace-nowrap overflow-x-auto">9:00 - 12:00 | 15:00 - 18:00</li>
                            <li className="text-ellipsis whitespace-nowrap overflow-x-auto">9:00 - 12:00 | 15:00 - 18:00</li>
                            <li className="text-ellipsis whitespace-nowrap overflow-x-auto">Chiuso</li>
                            <li className="text-ellipsis whitespace-nowrap overflow-x-auto">Chiuso</li>
                            </ul>
                        </div>
                        </InfoCard>

                    <InfoCard
                        name="Infopoint Crema"
                        address="Piazza del Comune n. 5 - 26100 Cremona"
                        phone="0372 407081"
                        email="info.turismo@comune.cremona.it "
                        url="https://nextjs.org/docs/app/guides/mdx"
                    >
                        <div className="flex gap-4 w-full">
                            <ul>
                                <li>Lunedi</li>
                                <li>Martedi</li>
                                <li>Mercoledi</li>
                                <li>Giovedi</li>
                                <li>Venerdi</li>
                                <li>Sabato</li>
                                <li>Domenica</li>
                            </ul>
                            <ul className="w-full">
                                <li className="text-ellipsis whitespace-nowrap overflow-x-auto">9:00 - 12:00 | 15:00 - 18:00</li>
                                <li className="text-ellipsis whitespace-nowrap overflow-x-auto">9:00 - 12:00 | 15:00 - 18:00</li>
                                <li className="text-ellipsis whitespace-nowrap overflow-x-auto">9:00 - 12:00 | 15:00 - 18:00</li>
                                <li className="text-ellipsis whitespace-nowrap overflow-x-auto">9:00 - 12:00 | 15:00 - 18:00</li>
                                <li className="text-ellipsis whitespace-nowrap overflow-x-auto">9:00 - 12:00 | 15:00 - 18:00</li>
                                <li className="text-ellipsis whitespace-nowrap overflow-x-auto">Chiuso</li>
                                <li className="text-ellipsis whitespace-nowrap overflow-x-auto">Chiuso</li>
                            </ul>
                        </div>
                    </InfoCard>
                </div>
                </div>
            </section>

        </>
    )
}