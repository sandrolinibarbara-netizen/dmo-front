'use client'
import React, {useEffect, useState} from "react";
import NextSlide from "@/app/_components/NextSlide";
import PrevSlide from "@/app/_components/PrevSlide";
import Image from "next/image";

export default function Carousel({pics}:{pics:any}) {

    const [slide, setSlide] = useState<number>(0);
    const [placeholder, setPlaceholder] = useState<number>(slide);


    function setCurrentSlide(fn:string) {
        document.getElementById('prevBtn')?.setAttribute('disabled', 'disabled');
        document.getElementById('nextBtn')?.setAttribute('disabled', 'disabled');
        if(fn === 'add') {
            if(slide === 6) {
                setSlide(0);
            } else {
                setSlide(prev => prev + 1);
            }
        } else {
            if(slide === 0) {
                setSlide(6);
            } else {
                setSlide(prev => prev - 1);
            }
        }
        document.getElementById('slider')?.classList.add('fadein');
    }

    function setCredits(str:string) {
        const arr = str.split('Credits:');
        return arr[1];
    }

    useEffect(() => {
        setTimeout(() => {
            document.getElementById('slider')?.classList.remove('fadein');
            document.getElementById('prevBtn')?.removeAttribute('disabled');
            document.getElementById('nextBtn')?.removeAttribute('disabled');
            setPlaceholder(slide);
        }, 1500)
    }, [slide])

   return(
       <div className="flex flex-col items-center gap-4 w-full max-w-[100%]">
           <div className="flex items-center w-full h-[80vh] relative max-w-[100%]">
               <PrevSlide setSlide={() =>setCurrentSlide('sub')}/>
               {pics &&
                   <>
                       <Image
                           className='object-cover absolute z-0'
                           src={process.env.NEXT_PUBLIC_BASE_URL + pics[placeholder].url}
                           alt={pics[placeholder].alternativeText}
                           fill={true}
                       />

                       <Image
                           id="slider"
                           className='object-cover relative z-5'
                           src={process.env.NEXT_PUBLIC_BASE_URL + pics[slide].url}
                           alt={pics[slide].alternativeText}
                           fill={true}
                       />

                       {
                           pics[slide].alternativeText.includes('Credits:') &&
                           <div className="text-white font-medium absolute z-6 bottom-2 right-5">
                               &copy; {setCredits(pics[slide].alternativeText)}
                           </div>
                       }
                   </>
               }
               <NextSlide setSlide={() => setCurrentSlide('add')}/>
           </div>
           <div className="flex gap-2">
               {pics &&
                   pics.map((pic: any, i: number) => {
                       return(
                            <div key={pic.name}
                                 className={`w-2 h-2 rounded-full ${slide === i ? 'bg-orange-500' : 'bg-gray-300'}`}></div>
                        )
                    })
               }
           </div>
       </div>
   )
}