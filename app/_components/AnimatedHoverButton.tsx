'use client'
import {useState} from "react";

export default function AnimatedHoverButton({content} : {content:string}) {
    const [isHover, setIsHover] = useState<string|undefined>(undefined);
    return(
        <>
            <span className={`${isHover === 'show' ? 'show' : isHover === 'hide' ? 'hide' : 'w-0'} h-full absolute bg-corpo-orange rounded-full py-4 top-[-7]`}></span>
            <span className="relative z-5 py-2 px-4" onMouseEnter={() => setIsHover('show')} onMouseLeave={() => setIsHover('hide')}>{content} &gt;</span>
        </>
    )
}