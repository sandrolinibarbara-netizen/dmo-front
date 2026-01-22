import Image from "next/image";
import Link from "next/link";
import {Experience} from "@/app/_types/types";

export default function SingleExperienceCard({el, grid} : {el:Experience, grid:boolean}) {
    return(
        <div className={`h-[348px] ${grid ? 'w-[27.5%]' : ''} border border-orange-500 rounded-xl text-black bg-[#F0F8FF]`}>
            <Image className="rounded-t-xl w-full h-[136px] object-cover" width={200} height={100} src={`/images/experiences/${el.immagine}`} alt="immagine"/>
            <div className="px-4 pt-4 pb-2">
                <h4 className="font-bold h-[32px]">
                    <span className="line-clamp-1">
                        {el.titolo}
                    </span>
                </h4>
                <p className="h-[104px]">
                    <span className="line-clamp-3">
                        {el.descrizione}
                    </span>
                </p>
                <div className="flex justify-between items-center">
                    <p className="font-bold">{
                        new Intl.NumberFormat("de-DE", {
                            style: "currency",
                            currency: "EUR"
                        }).format(el.costo)
                    }</p>
                    <Link href='/' className="text-black transition duration-500 hover:bg-corpo-orange bg-soft-orange rounded-full py-2 px-3">Scopri</Link>
                </div>
            </div>
        </div>
    )
}