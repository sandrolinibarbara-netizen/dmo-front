import TaleCard from "@/app/_components/TaleCard";
import MemberCard from "@/app/_components/MemberCard";
import Image from "next/image";
import Newsreel from "@/app/_components/Newsreel";

export default async function Who() {
    let content;
    try {
        let data = await fetch(process.env.NEXT_PUBLIC_BASE_URL + '/api/who' +
            '?populate[0]=tales_of_1.immagine' +
            '&populate[1]=tales_of_1.logo' +
            '&populate[2]=tales_of_2.immagine' +
            '&populate[3]=tales_of_2.logo' +
            '&populate[4]=hero' +
            '&populate[5]=team_1' +
            '&populate[6]=team_2' +
            '&populate[7]=team_3' +
            '&populate[8]=team_4' +
            '&populate[9]=team_4' +
            '&populate[10]=team_1.avatar' +
            '&populate[11]=team_2.avatar' +
            '&populate[12]=team_3.avatar' +
            '&populate[13]=team_4.avatar' +
            '&populate[14]=team_5.avatar' +
            '&populate[15]=sub_hero_immagine',
            { next: { revalidate: 1000 }}
        );
        content = await data.json();
    } catch(error) {
        console.log(error);
    }



  return (
      <>
          <div className="w-full h-[80vh] mt-[79px] relative fadein-slower">
              <Image
                  className='object-cover'
                  src={process.env.NEXT_PUBLIC_BASE_URL + content.data.hero.url}
                  alt={content.data.hero.alternativeText}
                  fill={true}
              />
          </div>

          <section
              className="flex flex-col md:flex-row gap-20 w-[90vw] md:w-[80vw] mx-auto px-4 md:px-8 pt-20 pb-24">
              <div className="flex flex-col gap-2 w-full">
                  <h2 className="font-bold text-4xl my-8">News</h2>

                  <Newsreel/>

              </div>
          </section>

          <section
              className="flex flex-col md:flex-row gap-20 w-[90vw] md:w-[80vw] mx-auto justify-center px-4 md:px-8 pt-20 pb-24">
              <div className="flex flex-col gap-2 w-full md:w-2/4">
                  <h2 className="font-bold text-4xl mt-8">{content.data['sub_hero_titolo']}</h2>
                  <p className="w-full mt-2 pl-1 whitespace-pre-line">{content.data['sub_hero_descrizione']}</p>

              </div>
              <div className="w-full md:w-2/4 h-[500px] md:h-[450px] relative">
                  <Image
                      className="object-cover rounded-xl"
                      src={process.env.NEXT_PUBLIC_BASE_URL + content.data['sub_hero_immagine'].url}
                      alt={content.data['sub_hero_immagine'].alternativeText}
                      fill={true}
                  />
              </div>
          </section>

          <section className="bg-corpo-blue px-8 pt-20 pb-20 md:pb-24">
              <div className="w-[80vw] mx-auto text-center">
                  <p className="text-white font-bold text-3xl whitespace-pre-line">{content.data.motto}</p>
              </div>
          </section>

          <section className="w-[90vw] md:w-[80vw] mx-auto px-4 md:px-8 pt-16 pb-24">
              <h2 className="font-bold text-4xl mt-8">{content.data['anime_titolo']}</h2>
              <p className="w-full mt-8 pl-1 whitespace-pre-line md:columns-2 gap-8">{content.data['anime_descrizione']}</p>

              <div className="flex flex-col md:flex-row gap-8 justify-center mt-16">
                  <TaleCard logo={[
                      process.env.NEXT_PUBLIC_BASE_URL + content.data['tales_of_1'][0].logo.url,
                      content.data['tales_of_1'][0].logo.alternativeText
                  ]} pic={[
                      process.env.NEXT_PUBLIC_BASE_URL + content.data['tales_of_1'][0].immagine.url,
                      content.data['tales_of_1'][0].immagine.alternativeText
                  ]}
                  />

                  <TaleCard logo={[
                      process.env.NEXT_PUBLIC_BASE_URL + content.data['tales_of_2'][0].logo.url,
                      content.data['tales_of_2'][0].logo.alternativeText
                  ]} pic={[
                      process.env.NEXT_PUBLIC_BASE_URL + content.data['tales_of_2'][0].immagine.url,
                      content.data['tales_of_2'][0].immagine.alternativeText
                  ]}
                  />
              </div>
          </section>

          <section className="w-[90vw] md:w-[80vw] mx-auto px-4 md:px-8 pt-8 pb-24 text-center">
              <h2 className="font-bold text-4xl mt-8">{content.data['team_titolo']}</h2>

              <div className="flex gap-12 justify-center mt-16 flex-wrap">

                  <MemberCard
                      avatar={[
                          process.env.NEXT_PUBLIC_BASE_URL + content.data['team_1'][0].avatar.url,
                          content.data['team_1'][0].avatar.alternativeText
                      ]}
                      name={content.data['team_1'][0].nome}
                      job={content.data['team_1'][0].ruolo}
                      link={content.data['team_1'][0]['profilo_linkedin']}
                  />

                  <MemberCard
                      avatar={[
                          process.env.NEXT_PUBLIC_BASE_URL + content.data['team_2'][0].avatar.url,
                          content.data['team_2'][0].avatar.alternativeText
                      ]}
                      name={content.data['team_2'][0].nome}
                      job={content.data['team_2'][0].ruolo}
                      link={content.data['team_2'][0]['profilo_linkedin']}
                  />

                  <MemberCard
                      avatar={[
                          process.env.NEXT_PUBLIC_BASE_URL + content.data['team_3'][0].avatar.url,
                          content.data['team_3'][0].avatar.alternativeText
                      ]}
                      name={content.data['team_3'][0].nome}
                      job={content.data['team_3'][0].ruolo}
                      link={content.data['team_3'][0]['profilo_linkedin']}
                  />

                  <MemberCard
                      avatar={[
                          process.env.NEXT_PUBLIC_BASE_URL + content.data['team_4'][0].avatar.url,
                          content.data['team_4'][0].avatar.alternativeText
                      ]}
                      name={content.data['team_4'][0].nome}
                      job={content.data['team_4'][0].ruolo}
                      link={content.data['team_4'][0]['profilo_linkedin']}
                  />

                  <MemberCard
                      avatar={[
                          process.env.NEXT_PUBLIC_BASE_URL + content.data['team_5'][0].avatar.url,
                          content.data['team_5'][0].avatar.alternativeText
                      ]}
                      name={content.data['team_5'][0].nome}
                      job={content.data['team_5'][0].ruolo}
                      link={content.data['team_5'][0]['profilo_linkedin']}
                  />
              </div>
          </section>

      </>
  );
}
