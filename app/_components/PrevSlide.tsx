'use client'

import Image from "next/image";

export default function PrevSlide({setSlide} : {setSlide:() => void}) {

    return(
        <button className="z-10 pb-0.5 cursor-pointer absolute w-8 h-8 left-5"
                onClick={setSlide}
                id="prevBtn">
            <Image src="/icons/carousel-prev.svg" alt="next arrow" width={48} height={48}/>
        </button>
    )
}