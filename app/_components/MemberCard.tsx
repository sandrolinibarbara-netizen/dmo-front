import Image from "next/image";

export default function MemberCard({avatar, name, job, link} :
{avatar:string[]|undefined, name:string|undefined, job:string|undefined, link:string|undefined}) {
    return (
        <div className="rounded-xl w-[17.5vw] flex flex-col items-center">
            {avatar && name && job && link &&
                <>
                    <div className="w-full h-[50vh] max-h-[500px] relative">
                        <Image
                            className="rounded-xl object-cover"
                            src={avatar[0]}
                            alt={avatar[1]}
                            fill={true}
                        />
                    </div>
                    <p className="mt-4 font-semibold">{name}</p>
                    <p>{job}</p>

                    { link !== '-' &&
                        <a href={link} className="w-8 h-8 mt-2">
                            <Image width={48} height={48} src="/linkedin.webp" alt="linkedin-logo"/>
                        </a>
                    }
                </>
            }
        </div>
    )
}