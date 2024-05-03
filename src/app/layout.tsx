import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {
  Navbar, 
  NavbarBrand, 
  NavbarContent, 
  NavbarItem, 
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem
} from "@nextui-org/navbar";
import { ThemeProvider } from "./Components/themeProvider";
import ToggleMode  from "./Components/themeButton";
import Link from "next/link";
import Footer from "./Components/Footer";

export const metadata: Metadata = {
  title: "Ahmed Khaled",
  description: "🚀📦",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="mt-12 lg:mt-0 lg:m-0 ml-6 mr-6 dark:bg-dPurp-900 bg-beige-bg">
      <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
        >
        <Navbar className="mr-2 ml-0 lg:ml-12 2xl:ml-20 lg:float-left dark:text-cyan-600 dark:opacity-85 text-cyan-700 mb-12 lg:mb-0" position-sticky="true">
          <NavbarContent className="flex lg:flex-col text-xl font-amarga gap-2 lg:gap-6">
            <NavbarBrand className="mb-8">
              <Link href="/">
              <h1 className=" px-4 rounded-3xl bg-cyan-800 text-beige-bg dark:text-dPurp-800 lg:text-8xl font-amarga hidden lg:flex lg:ml-2 hover:bg-amber-500">A</h1>
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
        <main className="min-h-screen lg:mb-10 2xl:ml-10 xl:ml-24 lg:ml-28 lg:mr-24 lg:mt-16 px-2 md:px-6 lg:px-24 xl:px-32 2xl:px-64">
          {children}
          <Footer/>
        </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
