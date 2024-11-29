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
    <Navbar className="xl:mt-0 mr-2 lg:ml-10 xl:ml-12 2xl:ml-14 mb-12 lg:mb-0 lg:float-left dark:text-beige-100 text-orange-500 transition-all duration-300">
      <NavbarContent className="flex lg:flex-col gap-0 font-amarga lg:gap-6">
        <NavbarBrand className="mb-8">
          <Link
            href="/"
            className="px-6 rounded-3xl bg-orange-600 dark:bg-dr text-lbg dark:text-dPurp-800 py-4 lg:text-7xl hidden lg:flex lg:ml-2 hover:saturate-150"
          >
            A
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
