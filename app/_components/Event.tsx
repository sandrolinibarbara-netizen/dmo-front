import Image from "next/image";

export default function Event({what, when, where, how, img} : {what:string, when:string, where:string, how:string, img:string}){
    return (
        <div className="w-full rounded-xl border-1 flex p-4 gap-8 h-[558px]">
            <Image src={img} alt="copertina esperienza" width={400} height={400} className="rounded-xl w-[40%] h-[524px] object-cover"/>
            <div>
                <div className="p-4 h-[456px]">
                    <h5 className="mb-2 font-semibold text-2xl">{what}</h5>
                    <div className="flex flex-col gap-4 my-4 border-b-1 border-orange-800 pb-4">
                        <div className="flex gap-4 items-center">
                            <div
                                className="flex items-center justify-center w-8 h-8 border-1 border-orange-500 rounded-lg font-bold text-orange-500">Q
                            </div>
                            <div className="text-sm flex flex-col">
                                <span className="inline-block">Quando</span>
                                <span className="inline-block">{when}</span>
                            </div>
                        </div>
                        <div className="flex gap-4 items-center">
                            <div
                                className="flex items-center justify-center w-8 h-8 border-1 border-orange-500 rounded-lg font-bold text-orange-500">D
                            </div>
                            <div className="text-sm flex flex-col">
                                <span className="inline-block">Dove</span>
                                <span className="inline-block">{where}</span>
                            </div>
                        </div>
                        <div className="flex gap-4 items-center">
                            <div
                                className="flex items-center justify-center w-8 h-8 border-1 border-orange-500 rounded-lg font-bold text-orange-500">C
                            </div>
                            <div className="text-sm flex flex-col">
                                <span className="inline-block">Contatti</span>
                                <span className="inline-block">Biglietteria: 0534 4569023</span>
                            </div>
                        </div>
                    </div>
                    <p className="text-sm line-clamp-6">
                        <span className="mb-4 inline-block">{how}</span>

                        In ac ante neque. Sed iaculis posuere mattis. Aenean aliquet sapien ut sem fermentum, luctus
                        volutpat augue rutrum. Nam dapibus sem et nibh scelerisque, at condimentum orci dictum. Nunc vitae
                        vulputate lorem, et varius tellus. Aenean vitae nibh in quam cursus tincidunt. Proin eget quam vitae
                        mauris ullamcorper facilisis. Sed rhoncus ornare enim, et ornare ligula hendrerit at. Ut eget odio
                        nec velit egestas ornare. Proin ut pulvinar erat. Donec interdum leo sed lacus sollicitudin, id
                        ultricies dolor tristique.
                        Sed laoreet lacus sed ligula posuere, a pharetra est varius. Nulla facilisis aliquam metus nec
                        rutrum. Ut placerat vel dui eget bibendum. Nulla porta lectus ante. Sed gravida, ante non viverra
                        consequat, risus neque pretium ex, vel varius urna justo sed risus. Curabitur consequat pretium
                        fermentum. Proin sodales urna vel risus hendrerit varius. In sit amet luctus est, sed pharetra
                        augue. Morbi congue volutpat est, eu feugiat enim ultrices non. Cras eleifend ullamcorper nisl, et
                        suscipit dolor maximus non. Orci varius natoque penatibus et magnis dis parturient montes, nascetur
                        ridiculus mus. In hac habitasse platea dictumst. Vestibulum eu ante diam. Mauris egestas, lectus nec
                        laoreet elementum, magna augue vestibulum massa, id vestibulum massa erat sit amet tellus. Aliquam
                        erat volutpat. Nullam eget congue mi.
                    </p>
                </div>
                <div className="flex gap-4 w-full items-center justify-end text-sm border-t border-orange-800 pt-8">
                    <a className="text-black transition duration-500 hover:bg-corpo-orange bg-soft-orange rounded-full py-2 px-3"
                       href="/">Acquista &gt;</a>
                    <a className="text-black transition duration-500 hover:bg-corpo-orange bg-soft-orange rounded-full py-2 px-3"
                       href="/">Partecipa all'evento &gt;</a>
                </div>
            </div>
        </div>
    )
}