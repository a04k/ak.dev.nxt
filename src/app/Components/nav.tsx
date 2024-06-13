import ToggleMode  from "./themeButton";
import Link from "next/link";
import {
  Navbar, 
  NavbarBrand, 
  NavbarContent, 
  NavbarItem, 
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem
} from "@nextui-org/navbar";

export function Nav() {
  return (
    <Navbar className="mr-2 ml-0 lg:ml-12 2xl:ml-20 lg:float-left dark:text-beige-100 text-orange-400 mb-12 lg:mb-0" position-sticky="true">
          <NavbarContent className="flex lg:flex-col text-xl font-amarga gap-2 lg:gap-6">
            <NavbarBrand className="mb-8">
              <Link href="/">
              <h1 className=" px-4 rounded-3xl dark:bg-olive-200 bg-orange-700 text-lbg-100 dark:text-dPurp-800 lg:text-8xl font-amarga hidden lg:flex lg:ml-2 hover:saturate-150">A</h1>
              </Link>
            </NavbarBrand>
            <NavbarItem>
              <Link color="foreground" href="/" className="navlink">
                home
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link color="foreground" href="/resume" className="navlink">
                resume
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link color="foreground" href="/blog" className="navlink">
                blog
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link color="foreground" href="https://github.com/a04k" className="navlink">
                github
              </Link>
            </NavbarItem>
            <NavbarItem>
              <ToggleMode/>
            </NavbarItem>
          </NavbarContent>
        </Navbar>
  );
}
