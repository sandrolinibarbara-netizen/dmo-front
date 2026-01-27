'use client'
import {useMemo} from "react";
import dynamic from "next/dynamic";

export default function LocalMap({homepage, autoFilter, fullPage} : {homepage:boolean, autoFilter?:undefined|number, fullPage?:undefined|boolean}) {
    const ImportedMap = useMemo(() => dynamic(
        () => import('@/app/_components/Map'),
        {
            loading: () => <p>A map is loading</p>,
            ssr: false
        }
    ), [])

    return <ImportedMap homepage={homepage} autoFilter={autoFilter} fullPage={fullPage}/>
}