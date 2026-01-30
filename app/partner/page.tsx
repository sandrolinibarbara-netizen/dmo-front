import Image from "next/image";
import ContactForm from "@/app/_components/ContactForm";
import {PDF} from "@/app/_components/_icons/PDF";

export default async function Who() {
    let content;
    const partnersInfo = [];
    try{
        let data = await fetch(process.env.NEXT_PUBLIC_BASE_URL + '/api/partner'+
            '?populate[0]=partner_1.immagine' +
            '&populate[1]=partner_2.immagine' +
            '&populate[2]=partner_3.immagine' +
            '&populate[3]=partner_4.immagine' +
            '&populate[4]=partner_5.immagine' +
            '&populate[5]=partner_6.immagine' +
            '&populate[6]=partner_7.immagine' +
            '&populate[7]=partner_8.immagine' +
            '&populate[8]=partner_9.immagine' +
            '&populate[9]=partner_10.immagine' +
            '&populate[10]=partner_11.immagine' +
            '&populate[11]=partner_12.immagine' +
            '&populate[12]=partner_13.immagine' +
            '&populate[13]=partner_14.immagine' +
            '&populate[14]=partner_15.immagine' +
            '&populate[15]=partner_16.immagine' +
            '&populate[16]=partner_17.immagine' +
            '&populate[17]=partner_18.immagine' +
            '&populate[18]=partner_1' +
            '&populate[19]=partner_2' +
            '&populate[20]=partner_3' +
            '&populate[21]=partner_4' +
            '&populate[22]=partner_5' +
            '&populate[23]=partner_6' +
            '&populate[24]=partner_7' +
            '&populate[25]=partner_8' +
            '&populate[26]=partner_9' +
            '&populate[27]=partner_10' +
            '&populate[28]=partner_11' +
            '&populate[29]=partner_12' +
            '&populate[30]=partner_13' +
            '&populate[31]=partner_14' +
            '&populate[32]=partner_15' +
            '&populate[33]=partner_16' +
            '&populate[34]=partner_17' +
            '&populate[35]=partner_18',
            { next: { revalidate: 1000 }}
        );
        content = await data.json();
        for(const [key, value] of Object.entries(content.data)) {
            if(key.startsWith('partner_')) {
                partnersInfo.push(value);
            }
        }
    } catch(error) {
        console.log(error);
    }

  return (
      <>
          <section
              className="w-[90vw] md:w-[80vw] mx-auto text-center md:text-left mt-[79px] pt-[69px] mb-[80px] min-h-[65vh] fadein-slower">
              <h2 className="font-bold text-4xl">{content.data['partners_titolo']}</h2>
              <div className="grid justify-items-center grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-8">
                  {partnersInfo &&
                      partnersInfo.map((el: any) => {
                          if (!el[0]) {
                              return
                          } else {
                              if (el[0].link) {
                                  return (
                                      <div className="max-w-[200px] w-auto h-24 relative" key={Math.random()}>
                                          <a href={el[0].link} target="_blank">
                                              <Image
                                                  width={200}
                                                  height={100}
                                                  className="rounded-xl"
                                                  src={process.env.NEXT_PUBLIC_BASE_URL + el[0].immagine.url}
                                                  alt={el[0].immagine.alternativeText}
                                              />
                                          </a>
                                      </div>
                                  )
                              } else {
                                  return (
                                      <div className="max-w-[200px] w-auto h-24 relative" key={Math.random()}>
                                          <Image
                                              width={200}
                                              height={100}
                                              className="rounded-xl"
                                              src={process.env.NEXT_PUBLIC_BASE_URL + el[0].immagine.url}
                                              alt={el[0].immagine.alternativeText}
                                          />
                                      </div>
                                  )
                              }
                          }

                      })
                  }
              </div>

              <h2 className="font-bold text-4xl mt-16">{content.data['diventa_partner_titolo']}</h2>
              <p className="w-full pl-1 columns-2 mt-8 whitespace-pre-line">
                  The standard Lorem Ipsum passage, used since the 1500s
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                  et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                  officia deserunt mollit anim id est laborum."
                  Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC
                  "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                  totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta
                  sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
                  consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
                  dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora
                  incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
                  exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis
                  autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel
                  illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
              </p>
              <ContactForm newsletter={false} partner={true}/>

              <h2 className="font-bold text-4xl mt-20 mb-8">Scaricabili</h2>
              <div className="flex gap-4 w-full">
                  <div
                      className="p-8 w-[33%] min-h-[172px] rounded-xl bg-corpo-blue text-white flex flex-col gap-6">
                      <p className="font-bold">Lorem ipsum dolor sit amet</p>
                      <div className="flex gap-4 items-center mt-2">
                          <PDF className="cursor-pointer w-12 h-12"/>
                          <p className="text-sm w-[75%]">
                              Sed mollis cursus ex, nec interdum mi ultrices et. Fusce ut accumsan magna.
                          </p>
                      </div>
                  </div>

                  <div
                      className="p-8 w-[33%] min-h-[172px] rounded-xl bg-corpo-blue text-white flex flex-col gap-6">
                      <p className="font-bold">Lorem ipsum dolor sit amet</p>
                      <div className="flex gap-4 items-center mt-2">
                          <PDF className="cursor-pointer w-12 h-12"/>
                          <p className="text-sm w-[75%]">
                              Sed mollis cursus ex, nec interdum mi ultrices et. Fusce ut accumsan magna.
                          </p>
                      </div>
                  </div>

                  <div
                      className="p-8 w-[33%] min-h-[172px] rounded-xl bg-corpo-blue text-white flex flex-col gap-6">
                      <p className="font-bold">Lorem ipsum dolor sit amet</p>
                      <div className="flex gap-4 items-center mt-2">
                          <PDF className="cursor-pointer w-12 h-12"/>
                          <p className="text-sm w-[75%]">
                              Sed mollis cursus ex, nec interdum mi ultrices et. Fusce ut accumsan magna.
                          </p>
                      </div>
                  </div>
              </div>
          </section>
      </>
  );
}
