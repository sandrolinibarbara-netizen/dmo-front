'use client'

import Image from "next/image";

export default function NextSlide({setSlide} : {setSlide:() => void}) {

    return(
        <button className="z-10 pb-0.5 cursor-pointer absolute w-8 h-8 right-5"
                onClick={setSlide}
                id="nextBtn">
            <Image src="/icons/carousel-next.svg" alt="next arrow" width={48} height={48}/>
        </button>
    )
}