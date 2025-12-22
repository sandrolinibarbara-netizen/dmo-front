import Image from "next/image";

export default async function Who() {
    let content;
    try{
        let data = await fetch('http://localhost:1337/api/partner?populate=*'
        );
        content = await data.json();
    } catch(error) {
        console.log(error);
    }

  return (
      <>
          <section className="w-[80vw] mx-auto mt-[79px] pt-[69px] mb-[80px] min-h-[65vh] fadein-slower">
              <h2 className="font-bold text-4xl">{content.data['partners_titolo']}</h2>
              <div className="flex gap-4 mt-8 flex-wrap">
              {
                  content.data['partners_logo'].map((el:any) => {
                      return (
                          <div className="w-24 h-24 relative" key={el.alternativeText}>
                              <Image
                                  className="object-cover rounded-xl"
                                  src={process.env.NEXT_PUBLIC_BASE_URL + el.url}
                                  alt={el.alternativeText}
                                  fill={true}
                              />
                          </div>
                      )
                  })
              }
              </div>

              <h2 className="font-bold text-4xl mt-16">{content.data['diventa_partner_titolo']}</h2>
              <p className="w-full pl-1 columns-2 mt-8 whitespace-pre-line">{content.data['diventa_partner_descrizione']}</p>
              <p className="w-full text-right font-semibold mt-4">Per maggiori informazioni scrivici a <span className="underline">info@visitcremona.com</span>
              </p>
          </section>
      </>
  );
}
