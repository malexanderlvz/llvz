import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import profileImage from "../../../public/marcos-hero_nov2023.png";
import Typewriter from "@/components/TypeWriter";
import { cn } from "@/lib/utils";
import jalapenosMobile from "../../../public/jalapenos-mobile.svg";
import idealjewelryMobile from "../../../public/idealjewelry-mobile.svg";
import getFadedMobile from "../../../public/getfaded-mobile.svg";
import learknDesktop from "../../../public/learkn-desktop.svg";
import bienMichesMobile from "../../../public/bien-miches-portfolio.png";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type PortfolioJob = {
  company: string;
  title: string;
  time: string;
  titleStyle: string;
  imageType: "mobile" | "desktop";
  previewImage: StaticImageData;
};

const jobs: PortfolioJob[] = [
  {
    company: "Bien Miches",
    title: "co-Founder & Software Engineer",
    time: "Now",
    titleStyle: "from-orange-700 to-yellow-300",
    imageType: "mobile",
    previewImage: bienMichesMobile,
  },
  {
    company: "FreeAgent CRM",
    title: "Director Of Professional Services",
    time: "2022",
    titleStyle: "from-orange-700 to-yellow-300",
    imageType: "mobile",
    previewImage: jalapenosMobile,
  },
  {
    company: "Jalapeños",
    title: "co-Founder & Software Engineer",
    time: "Now",
    titleStyle: "from-orange-700 to-yellow-300",
    imageType: "mobile",
    previewImage: jalapenosMobile,
  },
  {
    company: "Ideal Jewelry",
    titleStyle: "from-blue-300 to-white",
    imageType: "mobile",
    previewImage: idealjewelryMobile,
  },
  {
    company: "Get Faded",
    titleStyle: "from-black to-yellow-600",
    imageType: "mobile",
    previewImage: getFadedMobile,
  },
  {
    company: "Learkn",
    titleStyle: "from-violet-700 to-white",
    imageType: "desktop",
    previewImage: learknDesktop,
  },
];

const Home = () => {
  return (
    <>
      <MaxWidthWrapper className="relative mt-4 flex flex-col items-center text-center">
        <div className="max-w-[800px] flex flex-col justify-center">
          <Image
            src={profileImage}
            alt="Picture of the author"
            width={756}
            height={1008}
            className=""
          />
        </div>
        {/* <div className="flex flex-col items-center justify-center py-2">
          <p className="text-lg text-gray-600 mt-4">
            Hello I&apos;m Marcos, a software engineer based in Santa Cruz,
            California.
          </p>
        </div> */}
        <SitesSection jobs={jobs} />
      </MaxWidthWrapper>
    </>
  );
};

const SitesSection = ({ jobs }: { jobs: PortfolioJob[] }) => {
  return (
    <>
      <Accordion type="single" collapsible className="w-full">
        {/*<div className="flex flex-col justify-center items-center py-6 gap-8">*/}
        {jobs.map((job) => {
          {
            return (
              <AccordionItem value={job.company}>
                <AccordionTrigger className="!no-underline">
                  <div className="w-16 uppercase">{job.time}</div>
                  <div className="flex flex-col items-start">
                    <div className="">{job.title}</div>
                    <div className="text-sm uppercase">{job.company}</div>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <Site
                    key={job.title}
                    title={job.title}
                    imageType={job.imageType}
                    titleStyle={job.titleStyle}
                    previewImage={job.previewImage}
                  />
                </AccordionContent>
              </AccordionItem>
            );
          }
        })}
        {/*</div>*/}
      </Accordion>
    </>
  );
};
const Site = ({ title, titleStyle, imageType, previewImage }: PortfolioJob) => {
  return (
    <div className="">
      {imageType === "mobile" ? (
        <div className="bg-zinc-800 rounded-t-2xl max-w-[264px] pt-1 pr-1 pl-1 flex flex-col mx-9">
          <div className="border-t-2 border-r-2 border-l-2 border-zinc-500 rounded-t-2xl pt-[3px] pr-[3px] pl-[3px] drop-shadow-xl">
            <Image
              src={previewImage}
              alt="Picture of the author"
              width={500}
              height={500}
              className="z-0 relative mx-auto rounded-t-2xl drop-shadow-xl"
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
