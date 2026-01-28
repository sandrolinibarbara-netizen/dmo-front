import LocalMap from "@/app/_components/LocalMap";
import LinkCard from "@/app/_components/LinkCard";

export default function Links() {
    return (
        <section
            className="w-[90vw] md:w-[80vw] mx-auto mt-[79px] px-4 md:px-0 pt-[69px] mb-[80px] flex flex-col md:flex-row gap-16 fadein-slower">
            <div className="flex flex-col w-full">
                <h1 className="font-bold text-4xl mt-8 mb-16">Link utili</h1>
                <div className="flex gap-4 flex-wrap">
                    <LinkCard
                        title="Link1"
                        url="https://www.twitch.tv/yotobi"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat."
                        download={false}/>
                    <LinkCard
                        title="Link2"
                        url="https://www.twitch.tv/yotobi"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat."
                        download={false}/>
                    <LinkCard
                        title="Link3"
                        url="https://www.twitch.tv/yotobi"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat."
                        download={false}/>
                    <LinkCard
                        title="Link4"
                        url="https://www.twitch.tv/yotobi"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat."
                        download={false}/>
                </div>
            </div>
        </section>
    )
}