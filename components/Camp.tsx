import { PEOPLE_URL } from "@/constants";
import Image from "next/image";

interface CampProps {
  backgroundImage: string;
  title: string;
  subtitle: string;
  campers: number;
}

const CampSite = ({ backgroundImage, title, subtitle, campers }: CampProps) => {
  return (
    <div
      className={`h-full w-full min-w-[1000px] bg-center bg-cover bg-no-repeat lg:rounded-r-5xl 2xl:rounded-5xl ${backgroundImage}`}
    >
      <div className="flex h-full flex-col items-start justify-between p-6 lg:px-20 lg:py-10 cursor-pointer shadow-zinc-500 drop-shadow-lg">
        <div className="flexCenter gap-4">
          <div className="rounded-full bg-green-50 p-4 shadow-md">
            <Image src="/mapfolded.svg" alt="map" width={28} height={28} />
          </div>
          <div className="flex flex-col gap-1">
            <h4 className="bold-20 text-white">{title}</h4>
            <p className="regular-14 text-gray-200">{subtitle}</p>
          </div>
        </div>

        <div className="flexCenter gap-6">
          <span className="flex -space-x-4 overflow-hidden z-2">
            {PEOPLE_URL.map((url) => (
              <Image
                className="inline-block"
                src={url}
                key={url}
                alt="image of a person"
                width={52}
                height={52}
              />
            ))}
          </span>
          <p className="bold-16  text-white drop-shadow-xl">{`${campers} campers`}</p>
        </div>
      </div>
    </div>
  );
};
const Camp = () => {
  return (
    <section className="2xl:max-container-2 relative flex flex-col py-10 lg:mb-10 lg:py-10 xl:mb-20">
      <div className="hide-scrollbar flex h-[340px] w-full items-start justify-start gap-8 overflow-x-auto lg:h-[450px] xl:h-[560px]">
        <CampSite
          backgroundImage="bg-bg-img-1"
          title="Devils Garden Campground"
          subtitle="Arches National Park"
          campers={32}
        />
        <CampSite
          backgroundImage="bg-bg-img-2"
          title="Willow Flats Campground"
          subtitle="Canyonlands National Park"
          campers={13}
        />
        <CampSite
          backgroundImage="bg-bg-img-3"
          title="King's Bottom Dispersed"
          subtitle="BLM Moab, UT"
          campers={6}
        />
        <CampSite
          backgroundImage="bg-bg-img-4"
          title="Devil's Tower Dispersed"
          subtitle="BLM, Wyoming"
          campers={10}
        />
      </div>
    </section>
  );
};

export default Camp;
