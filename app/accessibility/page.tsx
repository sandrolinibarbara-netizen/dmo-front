import Markdown from "react-markdown";

export default async function Who() {
    let content;

    try {
        const data = await fetch(process.env.NEXT_PUBLIC_BASE_URL + 'api/accessibility-declaration');
        content = await data.json();
    } catch(error) {
        console.log(error);
    }

    return (
        <>
            <section className="w-[80vw] mx-auto mt-[79px] pt-[69px] mb-[80px] fadein-slower">
                <h2 className="font-bold text-4xl">{content.data.titolo}</h2>
                <div className="w-full mt-8 pl-1 markdown">
                    <Markdown>
                        {content.data.contenuto}
                    </Markdown>
                </div>
            </section>
        </>
    );
}
