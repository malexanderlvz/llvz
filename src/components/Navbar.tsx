"use client";
import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { buttonVariants } from "./ui/button";
import SignIn from "./auth/SignIn";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import MarcosLogo from "../../public/marcos-logo.svg";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";

const Navbar = () => {
  const pathName = usePathname();
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () => {
        setScrolled(window.scrollY > 0);
      });
    }
  }, []);
  if (pathName.includes("malexanderlvz")) {
    return (
      <header className="block">
        <div
          className={cn(
            `header-container relative z-50 transition-[min-height] duration-700 cubic-bezier will-change-[min-height] min-h-[calc(16.7842vw+72px)] ${
              scrolled ? `min-h-[72px]` : ``
            }`
          )}
        >
          <div className="fixed top-0 left-0 right-0 grainy py-6">
            <MaxWidthWrapper className="">
              <div className="flex w-full justify-end align-middle h-6 relative">
                <Menu />
              </div>

              <div
                className={cn(
                  `logo-name z-50 transform-gpu transition-[width] duration-700 will-change-[width,transform] translate-y-6 w-full logo-container h-auto cubic-bezier ${
                    scrolled ? `w-[143px] -translate-y-6 h-0` : ``
                  }`
                )}
              >
                <Link
                  href="/"
                  className="flex justify-center z-40 font-semibold"
                >
                  <Image
                    src={MarcosLogo}
                    alt="Marcos Logo"
                    className="min-h-[calc(16.7842vw + 72px)]"
                  />
                </Link>
              </div>
            </MaxWidthWrapper>
          </div>
        </div>
      </header>
    );
  }
  return (
    <nav className="sticky h-14 inset-x-0 top-0 z-30 w-full border-b border-grey-200 bg-white/7s backdrop-blur-lg transition-all">
      <MaxWidthWrapper>
        <div className="flex h-14 items-center justify-between border-b border-zinc-200">
          <Link href="/" className="flex z-40 font-semibold">
            llavez
          </Link>
          {/*TODO: add mobile nav */}
          <div className="hidden items-center space-x-4 sm:flex">
            <>
              <Link
                href="/pricing"
                className={buttonVariants({
                  variant: "ghost",
                  size: "sm",
                })}
              >
                Pricing
              </Link>
              <SignIn />
            </>
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};

export default Navbar;
