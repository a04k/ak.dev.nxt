//"use client"
//import { useState, useEffect } from "react";
import ToggleMode from "./themeButton";
import Link from "next/link";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/navbar";

export function Nav() {
  // const [isSticky, setIsSticky] = useState(false);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const scrollPosition = window.scrollY;
  //     const triggerHeight = window.innerHeight * 0.8;
  //     setIsSticky(scrollPosition > triggerHeight);
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);
  //  Experimenting with keeping it sticky, but also moves it to the center vertically {/*isSticky ? 'fixed top-1/2 transform -translate-y-1/2' : 'lg:float-left'*/}

  return (
    <Navbar className="xl:mt-0 mr-2 lg:mr-4 lg:ml-4 xl:ml-8 2xl:ml-11 mb-12 lg:mb-0 lg:float-left transition-all duration-300">
      <NavbarContent className="flex lg:flex-col gap-0 font-amarga lg:gap-6">
        <NavbarBrand className="mb-8">
          <Link
            href="/"
            className="px-6 rounded-3xl bg-orange-600 dark:bg-petronas-400 text-lbg dark:text-black py-2 lg:text-8xl hidden lg:flex lg:ml-2 hover:saturate-120 outline outline-2 dark:outline-white outline-black"
          >
            <span className="text-black">
              A
            </span>
          </Link>
        </NavbarBrand>

        <NavbarItem>
          <Link href="/" className="navlink">
            home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/resume" className="navlink">
            resume
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/blog" className="navlink">
            blog
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="https://github.com/a04k" className="navlink">
            github
          </Link>
        </NavbarItem>
        <NavbarItem>
          <ToggleMode />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
