'use client'
import {MapContainer, Marker, Popup, TileLayer} from "react-leaflet";
import Image from "next/image";
import "leaflet/dist/leaflet.css"
import "leaflet-defaulticon-compatibility"
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css"
import data from "@/utils/experiences.json"
import Link from "next/link";
import {useState} from "react";

export default function Map({homepage, autoFilter} : {homepage:boolean, autoFilter:number}) {
    const [filter, setFilter] = useState<string>('all');
    return (
        <section id="map">
            {homepage && <div className="flex items-center gap-4 px-4 mb-4">
                <ul className="text-sm flex gap-4">
                    <li>
                        <button type="button"
                                className="flex items-center border bg-gray-500 border-gray-500 text-white rounded-full px-4 py-2">
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
            <MapContainer className={`${homepage ? 'h-[600px]' : 'h-[546px] w-[848px]'} rounded-xl z-100`} center={[45.136887, 10.028458]} zoom={10}
                          scrollWheelZoom={false}>
                <TileLayer
                    attribution="Google Maps"
                    url="https://www.google.cn/maps/vt?lyrs=m@189&gl=cn&x={x}&y={y}&z={z}"
                />
                {((filter === 'all' && autoFilter === 0) || filter === 'cycling' || autoFilter === 1) && data.cycling.map(el => {
                    return(
                        <Marker key={el.coordinate[0] + ', ' + el.coordinate[1]} position={[el.coordinate[0], el.coordinate[1]]}>
                            <Popup className="border border-orange-500 rounded-xl">
                                <Image className="rounded-t-xl w-full h-[136px] object-cover" width={200} height={100} src={`/images/experiences/${el.immagine}`} alt="immagine"/>
                                <div className="px-4 pt-4 pb-2">
                                    <h4 className="font-bold">{el.titolo}</h4>
                                    <p>{el.descrizione}</p>
                                    <div className="flex justify-between items-center">
                                        <p className="font-bold">{
                                            new Intl.NumberFormat("de-DE", {
                                                style: "currency",
                                                currency: "EUR"
                                            }).format(el.costo)
                                        }</p>
                                        <Link href='/' className="text-black transition duration-500 hover:bg-corpo-orange bg-soft-orange rounded-full py-2 px-3">Scopri</Link>
                                    </div>
                                </div>
                            </Popup>
                        </Marker>
                    )
                })}

                {((filter === 'all' && autoFilter === 0) || filter === 'luthiery' || autoFilter === 2) && data.luthiery.map(el => {
                    return(
                        <Marker key={el.coordinate[0] + ', ' + el.coordinate[1]} position={[el.coordinate[0], el.coordinate[1]]}>
                            <Popup className="border border-orange-500 rounded-xl">
                                <Image className="rounded-t-xl w-full h-[136px] object-cover" width={200} height={100} src={`/images/experiences/${el.immagine}`} alt="immagine"/>
                                <div className="px-4 pt-4 pb-2">
                                    <h4 className="font-bold">{el.titolo}</h4>
                                    <p>{el.descrizione}</p>
                                    <div className="flex justify-between items-center">
                                        <p className="font-bold">{
                                            new Intl.NumberFormat("de-DE", {
                                                style: "currency",
                                                currency: "EUR"
                                            }).format(el.costo)
                                        }</p>
                                        <Link href='/' className="text-black transition duration-500 hover:bg-corpo-orange bg-soft-orange rounded-full py-2 px-3">Scopri</Link>
                                    </div>
                                </div>
                            </Popup>
                        </Marker>
                    )
                })}
            </MapContainer>
        </section>
    )
}