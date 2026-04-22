import Image from "next/image";

export default function SingleExperienceCard({el, grid, altGrid} : {el:any, grid:boolean, altGrid?:boolean}) {

    return(
        <div className={`h-[348px] ${grid ? 'md:w-[calc(25%-12px)]' : altGrid ? 'md:w-[calc(50%-16px)]' : ''} border border-orange-500 rounded-xl text-black bg-[#F0F8FF]`}>
            <Image className="rounded-t-xl w-full h-[136px] object-cover" width={200} height={100} src={`/images/experiences/violin1.webp`} alt="immagine"/>
            <div className="px-4 pt-4 pb-2">
                <h4 className="font-bold h-[32px]">
                    <span className="line-clamp-1">
                        {el.title}
                    </span>
                </h4>
                <p className="h-[104px]">
                    <span className="line-clamp-3">
                        {el.description?.[0].children[0].text ?? "Lorem ipsum dolor sit amet, " +
                            "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
                    </span>
                </p>
                <div className={`flex ${el.tipo === 'UN' ? 'justify-end' : 'justify-between'} items-center`}>
                    {el.tipo !== 'UN' && <p className="font-bold">da {
                        new Intl.NumberFormat("de-DE", {
                            style: "currency",
                            currency: "EUR"
                        }).format(el.cheapest)
                    }</p>}
                    <a href={`https://multishop-cremona.collaudo.domniapass.com/products/${el.slug}`}
                       className="text-black transition duration-500 hover:bg-corpo-orange bg-soft-orange rounded-full py-2 px-3">
                        Scopri</a>
                </div>
            </div>
        </div>
    )
}
