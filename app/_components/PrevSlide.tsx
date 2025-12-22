'use client'

export default function PrevSlide({setSlide} : {setSlide:() => void}) {

    return(
        <button className="z-10 pb-0.5 cursor-pointer absolute text-black bg-white rounded-full w-8 h-8 border-1 border-black left-5"
                onClick={setSlide}
                id="prevBtn">
            &larr;
        </button>
    )
}