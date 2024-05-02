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
import Link from "next/link";
import Footer from "./Components/Footer";

export const metadata: Metadata = {
  title: "Ahmed Khaled",
  description: "built by Ahmed",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="mt-12 lg:mt-0 lg:m-0 ml-6 mr-6">
        <Navbar className="ml-0 md:ml-6 lg:ml-20 lg:float-left dark:text-cyan-600 dark:opacity-85 text-cyan-700 gap-4 mb-12 lg:mb-0" position-sticky>
          <NavbarContent className="flex lg:flex-col text-xl font-amarga">
            <NavbarBrand className="mb-8">
              <Link href="/">
              <h1 className=" lg:text-8xl font-amarga hidden lg:flex lg:ml-2 hover:saturate-200">A</h1>
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
          </NavbarContent>
        </Navbar>
        <main className="min-h-screen lg:mb-10 lg:ml-24 lg:mr-24 lg:mt-16 px-2 md:px-6 lg:px-24 xl:px-32 2xl:px-64">
          {children}
          <Footer/>
        </main>
      </body>
    </html>
  );
}
