'use client'
import {useMemo} from "react";
import dynamic from "next/dynamic";

export default function LocalMap() {
    const ImportedMap = useMemo(() => dynamic(
        () => import('@/app/_components/Map'),
        {
            loading: () => <p>A map is loading</p>,
            ssr: false
        }
    ), [])

    return <ImportedMap/>
}