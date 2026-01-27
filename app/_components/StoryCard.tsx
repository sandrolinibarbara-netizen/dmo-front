import Image from "next/image";
import Link from "next/link";

export default function StoryCard({el}) {
    return(
        <div className="w-[calc(23.6%-4px)] h-[450px] rounded-xl bg-white relative">
            <div className="w-full h-[250px]">
                <Image
                    className="w-[400px] h-[300px] object-cover rounded-t-xl"
                    src={`/images/stories/${el.immagine}`}
                    width={200}
                    height={400}
                    alt="pic"/>
            </div>

            <h4 className="absolute top-[316px] left-4 font-bold">{el.titolo}</h4>

                <Link
                    href={`/stories/${el.slug}`}
                    className="absolute bottom-4 text-sm right-4 cursor-pointer mt-4 text-black transition duration-500 hover:bg-corpo-orange bg-soft-orange rounded-full px-3 py-2"
                    >
                    Leggi &gt;
                </Link>
        </div>
    )
}