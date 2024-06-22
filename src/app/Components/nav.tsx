import ToggleMode from "./themeButton";
import Link from "next/link";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/navbar";

export function Nav() {
  return (
    <Navbar
      className="mr-2 lg:ml-12 2xl:ml-20 lg:float-left dark:text-beige-100 text-orange-500 mb-12 lg:mb-0"
      position-sticky="true"
    >
      <NavbarContent className="flex lg:flex-col font-amarga lg:gap-6">
        <NavbarBrand className="mb-8">
          <Link href="/">
            <h1 className=" px-4 rounded-3xl bg-orange-600 dark:bg-dr text-lbg dark:text-dPurp-800 py-4 lg:text-7xl font-refrankt hidden lg:flex lg:ml-2 hover:saturate-150">
              A
            </h1>
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
          <Link
            color="foreground"
            href="https://github.com/a04k"
            className="navlink"
          >
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
