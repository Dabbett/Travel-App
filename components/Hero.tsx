import Image from "next/image";
import React from "react";
import Button from "./Button";

const Hero = () => {
  return (
    <section className="max-container padding-container flex flex-col gap-10 py-16 pb-0 md:gap-10 lg:py-20 xl:flex-row border-1">
      <div className="hero-map"/>

      <div className="relative z-20 flex flex-1 flex-col gap-4 xl:w-1/2">
        <Image
          src="/tent.png"
          alt="tent"
          width={130}
          height={130}
          className="absolute left-[-5px] top-[-55px] w-20 lg:w-24"
        />
      
      <h1 className="bold-52 lg:bold-68"> Wilderness Retreat</h1>
      <p className="regular-16 mt-0 text-gray-50 xl:max-w-[520px]">
        Find peace in the great outdoors, where nature's simplicity and starlit
        nights create unforgettable moments. Camping is a chance to reconnect,
        relax, and savor life's simple joys.
      </p>

      <div className="flex flex-wrap gap-5">
        <div className="flex items-center gap-1">
          {Array(5)
            .fill(1)
            .map((_, index) => (
              <Image
                src="/star.png"
                key={index}
                alt="star"
                width={24}
                height={24}
              />
            ))}
        </div>
        <p className="bold-16 lg:bold-20 text-cyan-500">
          204K
          <span className="regular-16 lg:regular-20 ml-1"> Reviews </span>
        </p>
      </div>

      <div className="flex flex-col w-full gap-3 sm:flex-row items-center">
        <Button 
          type="button"
          title="Download App"
          variant="btn_green" 
        />
        <Button 
          type="button"
          title="How it works"
          icon="/play.svg"
          variant="btn_white_text" 
        />
      </div>
    </div>
      <div className="relative flex flex-1 items-start">
            <div className="relative z-20 w-[260px] flex-col gap-8 rounded-3xl bg-green-90 px-7 py-8">
                <div className="flex flex-col">
                    <div className="flexBetween">
                        <p className="regular-16 text-gray-20"> Location </p>
                        <Image src="/close.svg" alt="close" width={24} height={24}/>
                    </div>
                    <p className="bold-20 text-white"> Aguas Calientes </p>
                    <div className="flexBetween">
                        <div className="flex flex-col">
                            <p className="regular-16 block text-gray-20"> Distance </p>
                            <p className="bold-20 text-white"> 173 mi</p>
                        </div>
                        <div className="flex flex-col">
                            <p className="regular-16 block text-gray-20"> Elevation </p>
                            <p className="bold-20 text-white"> 1.73 mi</p>
                        </div>
                    </div>
                    
                </div>

            </div>
      </div>
    </section>
  );
};

export default Hero;
