import LinkCard from "@/app/_components/LinkCard";

export default function Press() {
    return (
        <section
            className="w-[90vw] md:w-[80vw] mx-auto mt-[79px] px-4 md:px-0 pt-[69px] mb-[80px] flex flex-col md:flex-row gap-16 fadein-slower">
            <div className="flex flex-col w-full">
                <h1 className="font-bold text-4xl mt-8 mb-16">Area stampa</h1>
                <div className="flex gap-4 flex-wrap">
                    <LinkCard
                        title="Materiali del brand"
                        url="/Visit Cremona_Brand Guide_V6.pdf"
                        description="In questa sezione puoi trovare gli asset da scaricare oltre che alla brand identity"
                        download={true}/>
                    <LinkCard
                        title="Materiali fotografici"
                        url="/Visit Cremona_Brand Guide_V6.pdf"
                        description="In questa sezione puoi le fotografie di ogni esperienza per le tue pubblicazioni"
                        download={true}/>
                    <LinkCard
                        title="Materiali Esperienze"
                        url="/Visit Cremona_Brand Guide_V6.pdf"
                        description="Per tutte le esperienze vi sono i vari comunicati stampa da cui potrete trovare le informazioni adatte"
                        download={true}/>
                    <LinkCard
                        title="Cartina geografica"
                        url="/Visit Cremona_Brand Guide_V6.pdf"
                        description="La cartina della provincia per una visione totale del nostro territorio"
                        download={true}/>
                </div>
            </div>
        </section>
    )
}