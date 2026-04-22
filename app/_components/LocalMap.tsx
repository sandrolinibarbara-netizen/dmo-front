'use client'
import dynamic from "next/dynamic";
import {ComposerLocation} from "@/app/_types/types";

const ImportedMap = dynamic(
    () => import('@/app/_components/Map'),
    {
        loading: () => <p>A map is loading</p>,
        ssr: false
    }
);

export default function LocalMap({homepage, autoFilter, fullPage, composers, pages} : {homepage:boolean, autoFilter?:undefined|number, fullPage?:undefined|boolean, composers?:undefined|ComposerLocation[], pages:any}) {
    return <ImportedMap homepage={homepage} autoFilter={autoFilter} fullPage={fullPage} composers={composers} pages={pages}/>
}
