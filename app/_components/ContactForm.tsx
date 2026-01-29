import {sendMail} from "@/utils/nodemailer/sendMail";
import Form from "next/form";

export default function ContactForm({newsletter, partner} : {newsletter:boolean, partner?:undefined|boolean}) {
    async function send(formData:any) {
        'use server'
        if(formData.get('privacy') === 'on') {
            const fullName = formData.get('name') + ' ' + formData.get('lastname');
            const email = formData.get('email');
            if(partner) {
                const company = formData.get('company');
                const phone = formData.get('company');
                const message = formData.get('message');
                await sendMail({
                    sendTo: 'info@visitcremona.com',
                    subject:'Nuova richiesta di partnership',
                    text: fullName + '(' + company + ')' + ' ha mandato il seguente messaggio: ' + message,
                    replyTo: email
                });
                return;
            }
            if(!newsletter) {
                const subject = formData.get('subject');
                const message = formData.get('message');
                await sendMail({
                    sendTo: 'info@visitcremona.com',
                    subject:'Nuova richiesta di informazioni: ' + subject,
                    text: fullName + ' ha mandato il seguente messaggio: ' + message,
                    replyTo: email
                });
            } else {
                await sendMail({
                    sendTo: 'info@visitcremona.com',
                    subject:'Nuova iscrizione alla newsletter',
                    text: fullName + ' si è iscritto alla newsletter ',
                    replyTo: email
                });
            }
        }
    }

    return(
        <>
            {
                partner
                ? <Form action={send} className="mt-12 flex flex-col gap-4 w-full">
                        <div className="flex gap-4">
                            <label className="text-black w-[calc(33%-6px)]">
                                <input required name="name" className="bg-white shadow-sm w-full rounded-xl py-2 px-3"
                                       type="text"
                                       placeholder="Nome"/>
                            </label>
                            <label className="text-black w-[calc(33%-6px)]">
                                <input required name="lastname" className="bg-white shadow-sm w-full rounded-xl py-2 px-3"
                                       type="text"
                                       placeholder="Cognome"/>
                            </label>
                            <label className="text-black w-[calc(33%-6px)]">
                                <input required name="company" className="bg-white shadow-sm w-full rounded-xl py-2 px-3"
                                       type="text"
                                       placeholder="Azienda"/>
                            </label>
                        </div>

                        <div className="flex gap-4">
                            <label className="text-black w-[calc(50%-8px)]">
                                <input required name="email" className="bg-white shadow-sm w-full rounded-xl py-2 px-3"
                                       type="email"
                                       placeholder="Email"/>
                            </label>
                            <label className="text-black w-[calc(50%-8px)]">
                                <input required name="phone" className="bg-white shadow-sm w-full rounded-xl py-2 px-3"
                                       type="phone"
                                       placeholder="Telefono"/>
                            </label>
                        </div>

                            <label className="text-black">
                        <textarea required name="message" rows={8}
                                  className="bg-white shadow-sm w-full rounded-xl py-2 px-3" placeholder="Messaggio"/>
                            </label>


                            <label>
                                <input required name="privacy" className="mr-2" type="checkbox"/>
                                Ho preso visione e accetto la <a href="https://www.iubenda.com/privacy-policy/52538338"
                                                                 target="_blank" className="underline">privacy policy</a>
                            </label>

                            <div className={`w-full ${!newsletter ? 'text-right' : ''}`}>
                                <button type="submit"
                                        className={`cursor-pointer w-[164px] ${!newsletter ? "p-4" : "text-sm px-4 py-2 w-fit mt-2"} text-black transition duration-500 hover:bg-corpo-orange bg-soft-orange rounded-full`}>{!newsletter ? 'Invia' : 'Iscriviti'} &gt;</button>
                            </div>
                    </Form>
                : <Form action={send} className={`mt-8 flex flex-col gap-4 ${!newsletter ? '' : 'w-[55vw]'}`}>
                        <div className={`flex gap-4 ${!newsletter ? 'flex-col' : 'flex-row'}`}>
                            <label className={`text-black ${!newsletter ? '' : 'w-[50%]'}`}>
                            <input required name="name" className="bg-white shadow-sm w-full rounded-xl py-2 px-3" type="text"
                                       placeholder="Nome"/>
                            </label>
                            <label className={`text-black ${!newsletter ? '' : 'w-[50%]'}`}>
                                <input required name="lastname" className="bg-white shadow-sm w-full rounded-xl py-2 px-3" type="text"
                                       placeholder="Cognome"/>
                            </label>
                        </div>
                        <label className="text-black">
                            <input required name="email" className="bg-white shadow-sm w-full rounded-xl py-2 px-3" type="email"
                                   placeholder="Email"/>
                        </label>
                        {!newsletter &&
                            <>
                                <label className="text-black">
                                    <input required name="subject" className="bg-white shadow-sm w-full rounded-xl py-2 px-3"
                                           type="text" placeholder="Oggetto"/>
                                </label>
                                <label className="text-black">
                        <textarea required name="message" rows={8}
                                  className="bg-white shadow-sm w-full rounded-xl py-2 px-3" placeholder="Messaggio"/>
                                </label>
                            </>
                        }

                        <label>
                            <input required name="privacy" className="mr-2" type="checkbox"/>
                            Ho preso visione e accetto la <a href="https://www.iubenda.com/privacy-policy/52538338"
                                                             target="_blank" className="underline">privacy policy</a>
                        </label>

                        <div className={`w-full ${!newsletter ? 'text-right' : ''}`}>
                            <button type="submit"
                                    className={`cursor-pointer w-[164px] ${!newsletter ? "p-4" : "text-sm px-4 py-2 w-fit mt-2"} text-black transition duration-500 hover:bg-corpo-orange bg-soft-orange rounded-full`}>{!newsletter ? 'Invia' : 'Iscriviti'} &gt;</button>
                        </div>
                    </Form>
            }
        </>
    )
}