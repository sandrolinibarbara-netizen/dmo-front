import {sendMail} from "@/utils/nodemailer/sendMail";
import Form from "next/form";

export default async function Contacts() {
    let content;

    try {
        let data = await fetch('http://localhost:1337/api/contact');
        content = await data.json();
    } catch(error) {
        console.log(error)
    }

    async function send(formData:any) {
        'use server'
        if(formData.get('privacy') === 'on') {
            const fullName = formData.get('name') + ' ' + formData.get('lastname');
            const email = formData.get('email');
            const subject = formData.get('subject');
            const message = formData.get('message');
            await sendMail({
                sendTo: 'barbara.sandrolini@gmail.com',
                subject:'Nuova richiesta di informazioni: ' + subject,
                text: fullName + ' ha mandato il seguente messaggio: ' + message
            });
        }
    }

    return (
        <>
            <section className="w-[80vw] mx-auto mt-[79px] pt-[69px] mb-[80px] flex gap-16 fadein-slower">
                <div className="w-2/4">
                    <h2 className="font-bold text-4xl">Contatti</h2>
                    <p className="w-full mt-8 pl-1">Email: {content.data.email}</p>
                    <p className="w-full pl-1">Telefono: {content.data.telefono}</p>
                    <p className="w-full pl-1">Sede: {content.data.indirizzo}</p>
                </div>
                <div className="w-2/4">
                    <h2 className="font-bold text-4xl">Hai bisogno di piu info?</h2>
                    <Form action={send} className="mt-8 flex flex-col gap-4">
                        <label>
                            <input required name="name" className="shadow-sm w-full rounded-xl py-2 px-3" type="text" placeholder="Nome"/>
                        </label>
                        <label>
                            <input required name="lastname" className="shadow-sm w-full rounded-xl py-2 px-3" type="text" placeholder="Cognome"/>
                        </label>
                        <label>
                            <input required name="email" className="shadow-sm w-full rounded-xl py-2 px-3" type="email" placeholder="Email"/>
                        </label>
                        <label>
                            <input required name="subject" className="shadow-sm w-full rounded-xl py-2 px-3" type="text" placeholder="Oggetto"/>
                        </label>
                        <label>
                            <textarea required name="message" rows={8} className="shadow-sm w-full rounded-xl py-2 px-3" placeholder="Messaggio"/>
                        </label>

                        <label>
                            <input required name="privacy" className="mr-2" type="checkbox"/>
                            Ho preso visione e accetto la <a href="https://www.iubenda.com/privacy-policy/52538338"
                                                             target="_blank" className="underline">privacy policy</a>
                        </label>

                        <div className="w-full text-right">
                            <button type="submit" className="cursor-pointer w-[164px] text-black bg-soft-orange rounded-full p-4">Invia &gt;</button>
                        </div>
                    </Form>
                </div>
            </section>
        </>
    );
}
