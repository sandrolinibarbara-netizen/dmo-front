import Image from "next/image";
import Link from "next/link";

export default function VisitCard({title, price, details} : {title:string|undefined, price:number|undefined, details:string[]|undefined}) {
    return(
        <div className={`${title === 'Welcome Card' ? 'bg-pastel-blue border-blue-300' : 'bg-pastel-pink border-red-300'} rounded-xl w-full md:w-[40vw] flex flex-col border p-8 min-h-[40vh] relative`}>
            {
                title && price && details &&
                <>
                    <h4 className="flex justify-between font-bold text-2xl mb-2">
                        <span>{title}</span>
                        <span>{price} €</span>
                    </h4>
                    <ul className="mt-4 mb-8 text-sm">
                        {
                            details.map((el, i) => {
                                let image = '/globe.svg';
                                switch(i) {
                                    case 0:
                                        image = '/icons/flag.svg';
                                        break;
                                    case 1:
                                        image = '/icons/museum.svg';
                                        break;
                                    case 2:
                                        if(title === 'Welcome Card' && i > 1) {
                                            image = '/icons/person-disabled.svg';
                                        } else {
                                            image = '/icons/person.svg';
                                        }
                                        break;
                                    case 3:
                                        if(title === 'Welcome Card' && i > 1) {
                                            image = '/icons/map-disabled.svg';
                                        } else {
                                            image = '/icons/map.svg';
                                        }
                                        break;
                                    case 4:
                                        if(title === 'Welcome Card' && i > 1) {
                                            image = '/icons/ticket-disabled.svg';
                                        } else {
                                            image = '/icons/ticket.svg';
                                        }
                                        break;
                                }

                                return(
                                    <li key={Math.random()} className={`${title === 'Welcome Card' && i > 1 ? 'text-gray-400': 'text-black'} border-t flex gap-4 px-2 py-4 items-center`}>
                                        <Image width={i === 0 ? 34 : 28} height={i === 0 ? 34 : 28} src={image} alt="icon" />
                                        <p>{el}</p>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </>
            }
            <div className="w-full text-end absolute bottom-8 right-8">
                <Link href="/"
                      className="text-black text-sm transition duration-500 hover:bg-corpo-orange bg-soft-orange rounded-full px-3 py-2">
                    Acquista &gt;</Link>
            </div>
        </div>
    )
}