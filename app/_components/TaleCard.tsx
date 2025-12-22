import Image from "next/image";

export default function TaleCard({logo, pic} : {logo:string[]|undefined, pic:string[]|undefined}) {
    return (
        <div className="rounded-xl w-[25vw] p-6 shadow-lg">
            { logo && pic &&
                <>
                <div className="w-full h-[72px] relative">
                    <Image
                        className="object-contain max-h-[72px]"
                        src={logo[0]}
                        alt={logo[1]}
                        fill={true}
                    />
                </div>
                <div className="h-[248px] w-full relative mt-8">
                    <Image
                        className="rounded-xl object-cover"
                        src={pic[0]}
                        alt={pic[1]}
                        fill={true}
                    />
                </div>
                </>
            }
        </div>
    )
}