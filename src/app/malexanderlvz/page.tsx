"use client";
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
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { Josefin_Sans, Raleway } from "next/font/google";

const josefinSans = Josefin_Sans({ subsets: ["latin"] });
const raleway = Raleway({ subsets: ["latin"] });

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
      <div className="hero">
        <div
          className={cn(
            "hero-wrapper flex flex-col items-center text-center h-fit py-3 w-fit"
          )}
        >
          <div className="hero-image-wrapper">
            <div className="hero-image">
              <div className="hero-img">
                <Image
                  src={profileImage}
                  alt="Picture of the author"
                  width={756}
                  height={1008}
                  className="absolute h-full w-full top-0 right-0 bottom-0 left-0"
                />
              </div>
            </div>
            <div className="hero-sticky">
              <div className="hero-text-container">
                <div className="aboveHintScrollbar block">
                  <h2
                    className={cn(
                      "hero-about-me-text uppercase text-white mt-0 mx-9 mb-4 text-3xl font-light",
                      josefinSans.className
                    )}
                  >
                    About Me
                  </h2>
                  <Link
                    href="#my_work"
                    className={cn(
                      buttonVariants({ variant: "default", size: "lg" }),
                      "bg-white text-black uppercase font-bold text-xs",
                      raleway.className
                    )}
                  >
                    My Work
                  </Link>
                </div>
              </div>
              <div></div>
            </div>
          </div>
          <div className="hero-sticky">
            <div className="hero-text-container">
              <div className="aboveHintScrollbar">
                <h2
                  className={cn(
                    "hero-about-me-text uppercase text-foreground mt-0 mx-9 mb-4 text-3xl text-black font-light",
                    josefinSans.className
                  )}
                >
                  About Me
                </h2>
                <Link
                  href="#my_work"
                  className={cn(
                    buttonVariants({ variant: "default", size: "lg" }),
                    "bg-black uppercase font-bold text-xs",
                    raleway.className
                  )}
                >
                  My Work
                </Link>
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </div>
      <div id="my_work" className="about-me pb-20">
        <MaxWidthWrapper>
          <p className="text-3xl leading-[3rem] font-light">
            I plan, design, and develop{" "}
            <span className="font-bold uppercase text-2xl">data centric</span>{" "}
            websites & online products.
          </p>
        </MaxWidthWrapper>
      </div>
      <SitesSection jobs={jobs} />
    </>
  );
};

const aboutMeSection = function () {
  <div className="about-me-section">
    <h2 className="">About Me</h2>
  </div>;
};

const SitesSection = ({ jobs }: { jobs: PortfolioJob[] }) => {
  return (
    <>
      <MaxWidthWrapper>
        <h2
          className={cn("uppercase font-light text-3xl", josefinSans.className)}
        >
          My Work
        </h2>
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
      </MaxWidthWrapper>
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
