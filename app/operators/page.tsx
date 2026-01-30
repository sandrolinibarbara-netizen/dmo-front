'use client'
import LinkCard from "@/app/_components/LinkCard";
import {useState} from "react";

export default function Operators() {
    const [accessGranted, setAccessGranted] = useState<boolean>(false);
    const [password, setPassword] = useState<string>('');
    function verify() {
        if(password === '12345') {
            setAccessGranted(true);
        }
    }

    return (
        <>
            {accessGranted
                ? <section className="w-[90vw] md:w-[80vw] mx-auto mt-[79px] px-4 md:px-0 pt-[69px] mb-[80px] flex flex-col md:flex-row gap-16 fadein-slower">
                        <div className="flex flex-col w-full">
                            <h1 className="font-bold text-4xl mt-8 mb-16">Area operatori</h1>
                            <div className="flex gap-4 flex-wrap">
                                <LinkCard
                                    title="Risorse del Brand"
                                    url="/Visit Cremona_Brand Guide_V6.pdf"
                                    description="Qui troverai le linee guida del marchio e gli elementi scaricabili."
                                    download={true}/>
                                <LinkCard
                                    title="Archivio Fotografico"
                                    url="/Visit Cremona_Brand Guide_V6.pdf"
                                    description="Immagini ad alta risoluzione delle nostre esperienze."
                                    download={true}/>
                                <LinkCard
                                    title="Materiali delle Attività"
                                    url="/Visit Cremona_Brand Guide_V6.pdf"
                                    description="Comunicati stampa e informazioni utili per ogni attività."
                                    download={true}/>
                            </div>
                        </div>
                    </section>
                : <div className="w-[90vw] md:w-[80vw] h-[65vh] mx-auto mt-[79px] px-4 md:px-0 pt-[69px] mb-[80px] flex flex-col md:flex-row gap-16 fadein-slower">
                    <div className="w-full h-full flex items-center justify-center">
                        <div className="p-8 flex flex-col items-center bg-white rounded-xl">
                            <h2 className="font-bold text-2xl mb-4">Area operatori</h2>
                            <input
                                placeholder="Password"
                                className="border p-2 rounded-full"
                                value={password}
                                type="text"
                                onChange={(e) => setPassword(e.currentTarget.value)}/>
                            <button type="button" onClick={verify}
                                    className="cursor-pointer mt-4 w-full text-black transition duration-500 hover:bg-corpo-orange bg-soft-orange rounded-full px-4 py-3">Cerca
                            </button>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}