import Carousel from "@/app/_components/Carousel";
import ExperienceCard from "@/app/_components/ExperienceCard";
import VisitCard from "@/app/_components/VisitCard";
import Link from "next/link";
import Image from "next/image";
import AnimatedHoverButton from "@/app/_components/AnimatedHoverButton";

export default async function Home() {
    let content;

    try {
        let data = await fetch(process.env.NEXT_PUBLIC_BASE_URL + '/api/homepage' +
            '?populate[0]=esperienza_1.immagine' +
            '&populate[1]=esperienza_2.immagine' +
            '&populate[2]=esperienza_3.immagine' +
            '&populate[3]=hero_carosello' +
            '&populate[4]=sub_hero_video' +
            '&populate[5]=card_1' +
            '&populate[6]=card_2' +
            '&populate[7]=visit_cards_immagine',
            { next: { revalidate: 1000 }}
        );
        content = await data.json();
    } catch(error) {
        console.log(error);
    }

  return (
      <>
          <section className="mt-[79px] fadein-slower w-full">
            <Carousel pics={content.data['hero_carosello']}/>
          </section>

          <section className="flex flex-col md:flex-row gap-12 w-[90vw] md:w-[80vw] mx-auto justify-center px-4 md:px-8 pt-20 pb-24">
              <div className="flex flex-col gap-2 md:w-2/4 w-full">
                  <h2 className="font-bold text-4xl mt-8">{content.data['sub_hero_titolo']}</h2>
                  <h3 className="text-3xl pl-1">{content.data['sub_hero_sottotitolo']}</h3>
                  <p className="w-full mt-2 pl-1 whitespace-pre-line">{content.data['sub_hero_descrizione']}</p>
                  <div className="w-full text-right mt-8">
                    <Link href="/discover" className="font-bold underline relative">
                        <AnimatedHoverButton/>
                    </Link>
                  </div>
              </div>
              <div className="w-full h-[400px] md:w-2/4 md:h-auto relative">
                  <Image
                      className="object-cover object-left rounded-xl"
                      src={process.env.NEXT_PUBLIC_BASE_URL + content.data['sub_hero_video'].url}
                      alt={content.data['sub_hero_video'].alternativeText}
                      fill={true}
                  />
              </div>
          </section>

          <section className="w-full bg-corpo-blue text-white">
              <div className="flex flex-col gap-16 w-[90vw] md:w-[80vw] mx-auto justify-center px-4 md:px-8 pb-24 pt-16">
                  <h2 className="font-bold text-4xl mt-8 w-full text-center md:text-left">{content.data['esperienze_titolo']}</h2>

                  <div className="flex flex-col md:flex-row gap-4 justify-center">
                      <ExperienceCard
                          title={content.data['esperienza_1'][0]['nome']}
                          subtitle={content.data['esperienza_1'][0]['sottotitolo']}
                          description={content.data['esperienza_1'][0]['descrizione']}
                          background='yellow'
                          pic={[
                              process.env.NEXT_PUBLIC_BASE_URL + content.data['esperienza_1'][0]['immagine'].url,
                              content.data['esperienza_1'][0]['immagine'].alternativeText]}
                      />

                      <ExperienceCard
                          title={content.data['esperienza_2'][0]['nome']}
                          subtitle={content.data['esperienza_2'][0]['sottotitolo']}
                          description={content.data['esperienza_2'][0]['descrizione']}
                          background='orange'
                          pic={[
                              process.env.NEXT_PUBLIC_BASE_URL + content.data['esperienza_2'][0]['immagine'].url,
                              content.data['esperienza_2'][0]['immagine'].alternativeText]}
                      />

                      <ExperienceCard
                          title={content.data['esperienza_3'][0]['nome']}
                          subtitle={content.data['esperienza_3'][0]['sottotitolo']}
                          description={content.data['esperienza_3'][0]['descrizione']}
                          background='pink'
                          pic={[
                              process.env.NEXT_PUBLIC_BASE_URL + content.data['esperienza_3'][0]['immagine'].url,
                              content.data['esperienza_1'][0]['immagine'].alternativeText]}
                      />
                  </div>
              </div>
          </section>

          <section className="flex flex-col gap-8 w-[90vw] md:w-[80vw] mx-auto justify-center px-4 md:px-8 pt-16 pb-24">
              <div className="flex flex-col min-[1200px]:flex-row items-center relative">
                  <div className="w-full min-[1200px]:w-2/4 relative z-5">
                      <h2 className="font-bold text-4xl mt-8">{content.data['visit_cards_titolo']}</h2>
                      <p className="w-full mt-8 pl-1 whitespace-pre-line">{content.data['visit_cards_descrizione']}</p>
                  </div>
                  <div className="hidden min-[1200px]:w-3/4 min-[1200px]:h-[40vh] min-[1200px]:flex min-[1200px]:items-center min-[1200px]:justify-end">
                      <Image
                          className="w-full"
                          width={500}
                          height={500}
                          src={process.env.NEXT_PUBLIC_BASE_URL + content.data['visit_cards_immagine'].url}
                          alt={content.data['visit_cards_immagine'].alternativeText}
                      />
                  </div>
              </div>

              <div className="flex flex-col md:flex-row justify-center gap-4 mt-4">
                  <VisitCard
                      title={content.data['card_1'][0]['nome']}
                      price={content.data['card_1'][0]['prezzo']}
                      details={[
                          content.data['card_1'][0]['dettaglio_1'],
                          content.data['card_1'][0]['dettaglio_2']
                      ]}
                  />

                  <VisitCard
                      title={content.data['card_2'][0]['nome']}
                      price={content.data['card_2'][0]['prezzo']}
                      details={[
                          content.data['card_2'][0]['dettaglio_1'],
                          content.data['card_2'][0]['dettaglio_2'],
                          content.data['card_2'][0]['dettaglio_3']
                      ]}
                  />
              </div>
          </section>

          <section className="w-full bg-alt-blue text-white">
              <div className="flex flex-col md:flex-row gap-20 md:gap-16 w-[90vw] md:w-[80vw] mx-auto justify-center items-center px-4 md:px-8 pt-16 pb-20 md:pb-24">
                  <div className="flex flex-col text-center md:text-start w-full md:w-2/4">
                      <h2 className="font-bold text-4xl mt-8">{content.data['chi_siamo_titolo']}</h2>
                      <p className="w-full mt-8 pl-1 whitespace-pre-line text-xl">{content.data['chi_siamo_descrizione']}</p>
                      <div className="w-full text-center md:text-right mt-12 md:mt-8">
                        <Link href='/who' className="text-black transition duration-500 hover:bg-corpo-orange bg-soft-orange rounded-full p-4">Scopri di più &gt;</Link>
                      </div>
                  </div>
                  <div className="w-full md:w-2/4 md:h-[20vh] relative mb-8">
                    <Image
                        src='/logo.webp'
                        alt="visit-cremona-logo"
                        width={500}
                        height={500}
                        className="max-w-[75%] mx-auto"
                    />
                  </div>
              </div>
          </section>
      </>
  );
}
