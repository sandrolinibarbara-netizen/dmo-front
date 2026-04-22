import Image from "next/image";
import Link from "next/link";
import Markdown from "react-markdown";
import getEvents from "@/app/lib/edt-events";

type EventProps = {
    how?: string;
    img?: string;
    what?: string;
    when?: string;
    where?: string;
};

export default async function Event({
    how,
    img,
    what,
    when,
    where,
}: EventProps) {
    const hasStaticContent = Boolean(what || when || where || how || img);
    const data = hasStaticContent ? undefined : await getEvents('/');
    const event = data?.events?.[0];
    const title = what ?? event?.translations?.it?.title ?? '';
    const description = how ?? event?.translations?.it?.description ?? '';
    const imageSource = img ?? '/images/experiences/violin1.webp';
    const address = where
        ? where
        : [
              event?.address?.addressPlace,
              event?.address?.streetAddress,
              event?.address?.addressLocality,
          ]
              .filter(Boolean)
              .join(', ');
    const date = when ?? event?.dates?.startDate ?? '';
    const telephone = event?.contacts?.telephone ?? '';

    if (!hasStaticContent && !event) {
        return null;
    }

    return (
        <>
            {(hasStaticContent || event) &&
                <div
                    className="w-full rounded-xl border-1 flex md:flex-row flex-col p-4 gap-8 overflow-y-auto md:overflow-y-none h-screen md:h-[558px]">
                    <Image src={imageSource} alt="copertina esperienza" width={400} height={400}
                           className="rounded-xl w-full md:w-[40%] h-[524px] object-cover"/>
                    <div>
                        <div className="p-4 h-[456px]">
                            <h5 className="mb-2 font-semibold text-2xl">{title}</h5>
                            <div className="flex flex-col gap-4 my-4 border-b-1 border-orange-800 pb-4">
                                <div className="flex gap-4 items-center">
                                    <div
                                        className="flex items-center justify-center w-8 h-8 border-1 border-orange-500 rounded-lg font-bold text-orange-500">Q
                                    </div>
                                    <div className="text-sm flex flex-col">
                                        <span className="inline-block">{date}</span>
                                    </div>
                                </div>
                                <div className="flex gap-4 items-center">
                                    <div
                                        className="flex items-center justify-center w-8 h-8 border-1 border-orange-500 rounded-lg font-bold text-orange-500">D
                                    </div>
                                    <div className="text-sm flex flex-col">
                                        <span className="inline-block">{address}</span>
                                    </div>
                                </div>
                                <div className="flex gap-4 items-center">
                                    <div
                                        className="flex items-center justify-center w-8 h-8 border-1 border-orange-500 rounded-lg font-bold text-orange-500">C
                                    </div>
                                    <div className="text-sm flex flex-col">
                                        <span className="inline-block">Biglietteria: {telephone}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="text-sm line-clamp-6 markdown">
                                <Markdown>
                                    {description}
                                </Markdown>
                            </div>
                        </div>
                        <div
                            className="flex gap-4 w-full items-center justify-end text-sm border-t border-orange-800 pt-8">
                            <Link className="text-black transition duration-500 hover:bg-corpo-orange bg-soft-orange rounded-full py-2 px-3"
                               href="/">Acquista &gt;</Link>
                            <Link className="text-black transition duration-500 hover:bg-corpo-orange bg-soft-orange rounded-full py-2 px-3"
                               href="/">Partecipa all&apos;evento &gt;</Link>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}
