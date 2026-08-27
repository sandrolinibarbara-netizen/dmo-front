'use client'
import NewsCard from "@/app/_components/NewsCard";
import {useState} from "react";
export default function Newsreel({content}:{content:any}) {

    const [boundary, setBoundary] = useState<number>(0);

    function changePage(step: 'prev' | 'next') {
        if (step === 'prev') {
            if (boundary - 2 < 0) {
                if (content.length % 2 === 0) {
                    setBoundary(content.length - 2);
                } else {
                    setBoundary(content.length - 1);
                }
            } else {
                setBoundary(prev => prev - 2);
            }
        } else {
            if (boundary + 2 >= content.length) {
                setBoundary(0);
            } else {
                setBoundary(prev => prev + 2);
            }
        }
    }

    return (
        <div className="flex flex-col gap-4">
            <div className="flex flex-col md:flex-row gap-4">

                {
                    content.map((el:any, i:number) => {
                        if (i >= boundary && i <= boundary + 1) {
                            return (
                                <NewsCard el={el} key={el.documentId}/>
                            )
                        }
                    })
                }

            </div>
            <div className="w-full flex items-center justify-center md:justify-end gap-8">

                <button type="button" onClick={() => changePage('prev')}
                        className="z-10 pb-0.5 cursor-pointer text-black bg-white rounded-full w-8 h-8 border-1 border-black"
                >&larr;</button>
                <button type="button" onClick={() => changePage('next')}
                        className="z-10 pb-0.5 cursor-pointer text-black bg-white rounded-full w-8 h-8 border-1 border-black"
                >&rarr;</button>
            </div>
        </div>
    )
}