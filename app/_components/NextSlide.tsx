'use client'

export default function NextSlide({setSlide} : {setSlide:() => void}) {

    return(
        <button className="z-10 pb-0.5 cursor-pointer absolute text-black bg-white rounded-full w-8 h-8 border-1 border-black right-5"
                onClick={setSlide}
                id="nextBtn">
            &rarr;
        </button>
    )
}