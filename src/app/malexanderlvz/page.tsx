import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import profileImage from "../../../public/marcos-2023q3.gif";
import Typewriter from "@/components/TypeWriter";
import { cn } from "@/lib/utils";
import jalapenosMobile from "../../../public/jalapenos-mobile.svg";
import idealjewelryMobile from "../../../public/idealjewelry-mobile.svg";
import getFadedMobile from "../../../public/getfaded-mobile.svg";
import learknDesktop from "../../../public/learkn-desktop.svg";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

type PortfolioSite = {
  title: string;
  titleStyle: string;
  imageType: "mobile" | "desktop";
  previewImage: StaticImageData;
};

const sites: PortfolioSite[] = [
  {
    title: "Jalapeños",
    titleStyle: "from-orange-700 to-yellow-300",
    imageType: "mobile",
    previewImage: jalapenosMobile,
  },
  {
    title: "Ideal Jewelry",
    titleStyle: "from-blue-300 to-white",
    imageType: "mobile",
    previewImage: idealjewelryMobile,
  },
  {
    title: "Get Faded",
    titleStyle: "from-black to-yellow-600",
    imageType: "mobile",
    previewImage: getFadedMobile,
  },
  {
    title: "Learkn",
    titleStyle: "from-violet-700 to-white",
    imageType: "desktop",
    previewImage: learknDesktop,
  },
];

const Home = () => {
  return (
    <>
      <div>
        <div className="bg-black relative mt-[56px]">
          <div className="absolute max-w-sm mx-auto z-10 inset-x-0">
            <Typewriter
              text={`Hey, I'm\nMarcos.`}
              delayTime={75}
              className="text-4xl font-bold text-slate-100 text-left whitespace-pre-line"
            />
          </div>

          <Image
            src={profileImage}
            alt="Picture of the author"
            width={500}
            height={500}
            className="rounded-full -mt-14 max-w-xs z-0 relative mx-auto pt-8"
          />
        </div>
        {/* <div className="flex flex-col items-center justify-center py-2">
          <p className="text-lg text-gray-600 mt-4">
            Hello I&apos;m Marcos, a software engineer based in Santa Cruz,
            California.
          </p>
        </div> */}
      </div>
      <MaxWidthWrapper className="bg-neutral-900">
        <SitesSection sites={sites} />
      </MaxWidthWrapper>
    </>
  );
};

const SitesSection = ({ sites }: { sites: PortfolioSite[] }) => {
  return (
    <div className="flex flex-col justify-center items-center py-6 gap-8">
      {sites.map((site) => {
        {
          return (
            <Site
              key={site.title}
              title={site.title}
              imageType={site.imageType}
              titleStyle={site.titleStyle}
              previewImage={site.previewImage}
            />
          );
        }
      })}
    </div>
  );
};
const Site = ({
  title,
  titleStyle,
  imageType,
  previewImage,
}: PortfolioSite) => {
  return (
    <div className="bg-black rounded-2xl pt-7">
      <h3
        className={cn(
          "bg-gradient-to-b bg-clip-text text-transparent text-4xl font-bold text-center flex flex-col mb-8 mx-9",
          titleStyle
        )}
      >
        {title}
      </h3>
      {imageType === "mobile" ? (
        <div className="bg-zinc-800 rounded-t-2xl max-w-[264px] pt-1 pr-1 pl-1 flex flex-col mx-9">
          <div className="border-t-2 border-r-2 border-l-2 border-zinc-500 rounded-t-2xl pt-[3px] pr-[3px] pl-[3px]">
            <Image
              src={previewImage}
              alt="Picture of the author"
              width={500}
              height={500}
              className="z-0 relative mx-auto rounded-t-2xl"
            />
          </div>
        </div>
      ) : (
        <Image
          src={previewImage}
          alt="Picture of the author"
          width={500}
          height={500}
          className="z-0 relative mx-auto rounded-b-2xl max-w-[332px]"
        />
      )}
    </div>
  );
};

export default Home;
