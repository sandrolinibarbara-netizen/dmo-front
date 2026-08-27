'use client'
import LocalMap from "@/app/_components/LocalMap";

export default function Routes() {

    return(
        <LocalMap homepage={false} autoFilter={100} fullPage={true}/>
    )
}