import Image from "next/image";

export default function VisitCard({title, price, details} : {title:string|undefined, price:number|undefined, details:string[]|undefined}) {
    return(
        <div className={`${title === 'Welcome' ? 'bg-pastel-blue border-blue-300' : 'bg-pastel-pink border-red-300'} rounded-xl w-[40vw] flex flex-col border p-8 min-h-[40vh]`}>
            {
                title && price && details &&
                <>

                        <h4 className="flex justify-between font-bold text-2xl mb-2">
                            <span>{title}</span>
                            <span>{price} €</span>
                        </h4>

                    <ul className="mt-4">
                        {
                            details.map((el, i) => {
                                let image = '/globe.svg';
                                switch(i) {
                                    case 0:
                                        image = '/icons/ic_outline-tour.webp';
                                        break;
                                    case 1:
                                        image = '/icons/proicons_museum.webp';
                                        break;
                                    case 2:
                                        image = '/icons/solar_ticket-sale-linear.webp';
                                        break;
                                }

                                return(
                                    <li key={Math.random()} className="border-t flex gap-4 px-2 py-4 items-start">
                                        <Image width={48} height={48} src={image} alt="icon" className="w-10 h-10"/>
                                        <p>{el}</p>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </>
            }
        </div>
    )
}