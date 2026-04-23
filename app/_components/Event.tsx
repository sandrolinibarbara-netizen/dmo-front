export default function Event({event}:{event:any}) {
    const title = event?.translations?.it?.title ?? '';
    const description = event?.translations?.it?.description ?? '';
    const imageSource = event?.translations?.it?.images?.[0]?.imageUrl ?? '/images/experiences/violin1.webp';
    const telephone = event?.contacts?.telephone ?? '';
    const link = event?.translations?.it?.url ?? '';
    const address = [
              event?.address?.addressPlace,
              event?.address?.streetAddress,
              event?.address?.addressLocality,
          ]
              .filter(Boolean)
              .join(', ');
    const date = new Date(event?.dates?.startDate).toLocaleDateString('it-IT', {
        year: "numeric",
        month: "long",
        day: "numeric",
    }) + (event?.dates?.endDate && event?.dates?.endDate !== event?.dates?.startDate ? ' - ' + new Date(event?.dates?.endDate).toLocaleDateString('it-IT', {
        year: "numeric",
        month: "long",
        day: "numeric",
    }) : '');

    if (!event) {
        return null;
    }

    return (
        <>
            {event &&
                <div
                    className="w-full rounded-xl border-1 flex md:flex-row flex-col p-4 gap-8 overflow-y-auto md:overflow-y-none md:h-[558px]">
                    <img src={imageSource} alt="copertina esperienza"
                           className="rounded-xl w-full md:w-[40%] h-[524px] object-cover"/>
                    <div>
                        <div className="p-4 md:h-[456px]">
                            <h5 className="mb-2 font-semibold text-2xl md:line-clamp-1">{title}</h5>
                            <div className="flex flex-col gap-4 my-4 border-b-1 border-orange-800 pb-4">
                                <div className="flex gap-4 items-center">
                                    <div
                                        className="flex items-center justify-center w-8 h-8 border-1 border-orange-500 rounded-lg font-bold text-orange-500">Q
                                    </div>
                                    <div className="text-sm flex flex-col">
                                        <p className="md:line-clamp-1">{date}</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 items-center">
                                    <div
                                        className="flex items-center justify-center w-8 h-8 border-1 border-orange-500 rounded-lg font-bold text-orange-500">D
                                    </div>
                                    <div className="text-sm flex flex-col">
                                        {address !== ''
                                            ? <p className="md:line-clamp-1">{address}</p>
                                            : <p>-</p>
                                        }
                                    </div>
                                </div>
                                <div className="flex gap-4 items-center">
                                    <div
                                        className="flex items-center justify-center w-8 h-8 border-1 border-orange-500 rounded-lg font-bold text-orange-500">C
                                    </div>
                                    <div className="text-sm flex flex-col">
                                        {telephone !== ''
                                            ? <p className="md:line-clamp-1">{telephone}</p>
                                            : <p>-</p>
                                        }
                                    </div>
                                </div>
                            </div>
                            <div className="text-sm md:h-[50%] overflow-y-auto" dangerouslySetInnerHTML={{ __html: description }}></div>
                        </div>


                        { link !== '' &&
                            <div
                                className="flex gap-4 w-full items-center justify-end text-sm border-t border-orange-800 pt-8">
                                    <a className="text-black transition duration-500 hover:bg-corpo-orange bg-soft-orange rounded-full py-2 px-3"
                               href={link}>Partecipa all&apos;evento &gt;</a>
                            </div>
                        }
                    </div>
                </div>
            }
        </>
    )
}
