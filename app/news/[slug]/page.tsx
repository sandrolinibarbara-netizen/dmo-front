import Markdown from "react-markdown";
import Image from "next/image";
import NewsCard from "@/app/_components/NewsCard";
export default async function News({params}: { params: Promise<{ slug: string }> }) {
    let content, contentNews;
    const relatedNews = [];
    const relatedIds = [];
    try {
        const { slug } = await params;
        let data = await fetch(process.env.NEXT_PUBLIC_BASE_URL + '/api/news/'+ slug +'?populate=*',
            { next: { revalidate: 1000 }});
        content = await data.json();

        let dataNews = await fetch(process.env.NEXT_PUBLIC_BASE_URL + '/api/news?populate=*',
            { next: { revalidate: 1000 }});
        contentNews = await dataNews.json();

        content.data.tags.forEach((tag:any) => {
            contentNews.data.forEach((el:any, i:number) => {
                el.tags.forEach((news:any) => {
                    if(news.id === tag.id && (relatedIds.indexOf(contentNews.data[i].documentId) === -1 && contentNews.data[i].documentId !== content.data.documentId)) {
                        relatedNews.push(contentNews.data[i]);
                        relatedIds.push(contentNews.data[i].documentId);
                    }
                })
            })
        })

    } catch(error) {
        console.log(error);
    }


    return(
        <>
        <section className="mt-[79px] fadein-slower">
            <div className="w-[95vw] md:w-[80vw] mx-auto items-center justify-center px-4 md:px-8 pt-20 pb-24">
                <p className="text-sm mb-10"><span
                    className="font-semibold">Home / News /</span> {content.data.titolo}
                </p>

                <div className="flex flex-col md:flex-row gap-16">
                    <div className="w-full md:w-[40%] h-[600px]">
                        <Image src={process.env.NEXT_PUBLIC_BASE_URL + content.data.immagine.url}
                               alt={content.data.immagine.alternativeText}
                               width={200} height={600}
                               className="w-full h-full object-cover rounded-xl"
                        />
                    </div>
                    <div className="w-full md:w-[60%]">
                        <h2 className="font-bold text-2xl mb-8">{content.data.titolo}</h2>
                        <div className="markdown">
                            <Markdown>
                                {content.data.contenuto}
                            </Markdown>
                        </div>
                        <div className="flex gap-2 w-full items-center">
                            <span className="font-semibold">Tags:</span>
                            {
                                content.data.tags.map((el: any) => {
                                    return (
                                        <p className="w-fit text-sm text-black bg-soft-orange rounded-full px-3 py-2"
                                           key={el.id}
                                        >
                                            {el.nome}
                                        </p>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
            <section
                className="w-[90vw] md:w-[80vw] mx-auto items-center justify-center px-4 md:px-8 pt-2 md:pt-8 pb-24">
            <h2 className="font-bold text-4xl mb-8">News correlate</h2>
                <div className="flex gap-4 flex-wrap">
                    {
                        relatedNews.map(el => {
                            return(
                                <NewsCard el={el} key={el.documentId}/>
                            )
                        })
                    }
                </div>
            </section>
        </>
    )
}