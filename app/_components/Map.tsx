'use client'
import {MapContainer, Marker, Popup, TileLayer} from "react-leaflet";
import Image from "next/image";
import "leaflet/dist/leaflet.css"
import "leaflet-defaulticon-compatibility"
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css"
import {useState} from "react";
import {ComposerLocation} from "@/app/_types/types";
import L from 'leaflet';
import cyclingMarker from '../../public/icons/cycling-marker.svg';
import luthieryMarker from '../../public/icons/luthiery-marker.svg';

export default function Map({homepage, autoFilter, fullPage, composers, pages} : {homepage:boolean, autoFilter?:undefined|number, fullPage?:undefined|boolean, composers?:undefined|ComposerLocation[], pages:any}) {
    const [filter, setFilter] = useState<string>('all');
    const cyclingIcon = new L.Icon({
        iconUrl: cyclingMarker.src,
    });
    const luthieryIcon = new L.Icon({
        iconUrl: luthieryMarker.src,
    });

    return (
        <section id="map">
            {homepage && <div className="flex items-center gap-4 px-1 md:px-4 mb-4">
                <ul className="text-sm flex gap-4 flex-wrap md:justify-start justify-center">
                    <li>
                        <button type="button"
                                className="flex items-center border bg-gray-500 border-gray-500 text-white rounded-full px-4 py-2">
                            <Image src="/icons/filter.svg" alt="filter icon" width={12} height={12} className="mr-1.5"/>
                            Filtri
                        </button>
                    </li>
                    <li>
                        <button value="cycling" type="button"
                                className={`${filter === 'all' ? 'bg-soft-orange' : 'border border-gray-300'} cursor-pointer rounded-full px-4 py-2`}
                                onClick={() => setFilter('all')}>Tutti
                        </button>
                    </li>
                    <li>
                        <button value="cycling" type="button"
                                className={`${filter === 'cycling' ? 'bg-soft-orange' : 'border border-gray-300'} cursor-pointer rounded-full px-4 py-2`}
                                onClick={() => setFilter('cycling')}>Cicloturismo
                        </button>
                    </li>
                    <li>
                        <button value="luthiery" type="button"
                                className={`${filter === 'luthiery' ? 'bg-soft-orange' : 'border border-gray-300'} cursor-pointer rounded-full px-4 py-2`}
                                onClick={() => setFilter('luthiery')}>Musica e liuteria
                        </button>
                    </li>
                </ul>
            </div>}
            <MapContainer className={`${homepage || fullPage ? 'h-[600px]' : 'h-[532px] md:w-[800px]'} w-full rounded-xl z-100`}
                          center={(composers && composers[0].name.includes('Paderno')) ? [45.23906740340918, 9.928271781708482] : [45.136887, 10.028458]}
                          zoom={composers ? 14 : 10}
                          scrollWheelZoom={false}>
                <TileLayer
                    attribution="Google Maps"
                    url="https://www.google.cn/maps/vt?lyrs=m@189&gl=cn&x={x}&y={y}&z={z}"
                />
                {((filter === 'all' && autoFilter === 0) || filter === 'cycling' || autoFilter === 1) && pages.filter((el:any) => el.tagIds.includes(3)).map(el => {
                    return(
                        <Marker key={el.documentId} position={[el.locations[0].lat, el.locations[0].lng]} icon={cyclingIcon}>
                            <Popup className="border border-orange-500 rounded-xl">
                                <Image className="rounded-t-xl w-full h-[136px] object-cover" width={200} height={100} src={el.imageUrl ? process.env.NEXT_PUBLIC_BASE_URL + el.imageUrl :`/images/experiences/violin1.webp`} alt="immagine"/>
                                <div className="px-4 pt-4 pb-2">
                                    <h4 className="font-bold">{el.title}</h4>
                                    <p className="line-clamp-6">{el.description?.[0].children[0].text ?? "Lorem ipsum dolor sit amet, " +
                                        "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}</p>
                                    <div className="flex justify-between items-center">
                                        <p className="font-bold">{
                                            new Intl.NumberFormat("de-DE", {
                                                style: "currency",
                                                currency: "EUR"
                                            }).format(el.cheapest)
                                        }</p>
                                        <a href={`https://multishop-cremona.collaudo.domniapass.com/products/${el.slug}`} className="text-black transition duration-500 hover:bg-corpo-orange bg-soft-orange rounded-full py-2 px-3">Scopri</a>
                                    </div>
                                </div>
                            </Popup>
                        </Marker>
                    )
                })}

                {((filter === 'all' && autoFilter === 0) || filter === 'luthiery' || autoFilter === 2) && pages.filter((el:any) => el.tagIds.includes(2)).map(el => {
                    return(
                        <Marker key={el.documentId} position={[el.locations[0].lat, el.locations[0].lng]} icon={luthieryIcon}>
                            <Popup className="border border-orange-500 rounded-xl">
                                <Image className="rounded-t-xl w-full h-[136px] object-cover" width={200} height={100} src={el.imageUrl ? process.env.NEXT_PUBLIC_BASE_URL + el.imageUrl :`/images/experiences/violin1.webp`} alt="immagine"/>
                                <div className="px-4 pt-4 pb-2">
                                    <h4 className="font-bold">{el.title}</h4>
                                    <p className="line-clamp-6">{el.description?.[0].children[0].text ?? "Lorem ipsum dolor sit amet, " +
                                        "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}</p>
                                    <div className="flex justify-between items-center">
                                        <p className="font-bold">{
                                            new Intl.NumberFormat("de-DE", {
                                                style: "currency",
                                                currency: "EUR"
                                            }).format(el.cheapest)
                                        }</p>
                                        <a href={`https://multishop-cremona.collaudo.domniapass.com/products/${el.slug}`}
                                              className="text-black transition duration-500 hover:bg-corpo-orange bg-soft-orange rounded-full py-2 px-3">Scopri</a>
                                    </div>
                                </div>
                            </Popup>
                        </Marker>
                    )
                })}

                {composers && composers.map(el => {
                    return (
                        <Marker key={el.lat + ', ' + el.long} position={[el.lat, el.long]} icon={luthieryIcon}>
                            <Popup className="border border-orange-500 rounded-xl">
                                <div className="px-4 pt-4 pb-2">
                                    <h4 className="font-bold">{el.name}</h4>
                                    <p>{el.description}</p>
                                </div>
                            </Popup>
                        </Marker>
                    )
                })}
            </MapContainer>
        </section>
    )
}