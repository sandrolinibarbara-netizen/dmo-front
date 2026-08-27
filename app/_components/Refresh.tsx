'use client'
import {useEffect} from "react";

export default function Refresh() {

    useEffect(() => {

        const navigated = localStorage.getItem("navigatedAway");
        if(navigated) {
            localStorage.removeItem("navigatedAway");
            window.location.reload();
        }

        window.addEventListener('beforeunload', (e) => {
            localStorage.setItem("navigatedAway", "true");
        })

        return () => {
            window.removeEventListener('beforeunload', (e) => {
                localStorage.setItem("navigatedAway", "true");
            })
        }
    }, [])

    return(
        <></>
    )
}