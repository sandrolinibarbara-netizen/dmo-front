import {PDF} from "@/app/_components/_icons/PDF";

export default function Downloads({info} : {info:any}) {
    return (

        <div id="downloadsList" className="mt-5 flex md:flex-row flex-col gap-4 w-full">
            {info.download_1[0] &&
                <div
                    className="p-8 w-full md:w-[33%] min-h-[172px] rounded-xl bg-corpo-blue text-white flex flex-col gap-6">
                    <p className="font-bold">{info.download_1[0].titolo}</p>
                    <a aria-label={info.download_1[0].cta} href={info.download_1[0].download ? process.env.NEXT_PUBLIC_BASE_URL + info.download_1[0].download.url : info.download_1[0].link}
                       download={!!info.download_1[0].download}
                       target="_blank" rel="noopener noreferrer"
                       className="flex gap-4 items-center mt-2">
                        <PDF aria-hidden={true} className="cursor-pointer w-12 h-12"/>
                        <p className="text-sm w-[75%]">
                            {info.download_1[0].cta}
                        </p>
                    </a>
                </div>
            }

            {info.download_2[0] &&
                <div
                    className="p-8 w-full md:w-[33%] min-h-[172px] rounded-xl bg-corpo-blue text-white flex flex-col gap-6">
                    <p className="font-bold">{info.download_2[0].titolo}</p>
                    <a aria-label={info.download_2[0].cta} href={info.download_2[0].download ? process.env.NEXT_PUBLIC_BASE_URL + info.download_2[0].download.url : info.download_2[0].link}
                       download={!!info.download_2[0].download}
                       target="_blank" rel="noopener noreferrer"
                       className="flex gap-4 items-center mt-2">
                        <PDF aria-hidden={true} className="cursor-pointer w-12 h-12"/>
                        <p className="text-sm w-[75%]">
                            {info.download_2[0].cta}
                        </p>
                    </a>
                </div>
            }

            {info.download_3[0] &&
                <div
                    className="p-8 w-full md:w-[33%] min-h-[172px] rounded-xl bg-corpo-blue text-white flex flex-col gap-6">
                    <p className="font-bold">{info.download_3[0].titolo}</p>
                    <a aria-label={info.download_3[0].cta} href={info.download_3[0].download ? process.env.NEXT_PUBLIC_BASE_URL + info.download_3[0].download.url : info.download_3[0].link}
                       download={!!info.download_3[0].download}
                       target="_blank" rel="noopener noreferrer"
                       className="flex gap-4 items-center mt-2">
                        <PDF aria-hidden={true} className="cursor-pointer w-12 h-12"/>
                        <p className="text-sm w-[75%]">
                            {info.download_3[0].cta}
                        </p>
                    </a>
                </div>
            }
        </div>
    )
}