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
      <body className="">
        <Navbar className="ml-20 mh-100 float-left text-rose-900">
          <NavbarContent className="flex flex-col sm:flex text-xl font-amarga gap-4">
            <NavbarBrand className="mb-8">
              <Link href="/">
              <h1 className="text-8xl font-amarga">A</h1>
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
              <Link color="foreground" href="https://github.com/a04k" className="navlink">
                github
              </Link>
            </NavbarItem>
          </NavbarContent>
        </Navbar>
        <main className="min-h-screen ml-24 mr-24 mt-16 mb-0 px-6 md:px-12 lg:px-24 xl:px-32 2xl:px-64">
          {children}
        </main>
        <Footer/>
      </body>
    </html>
  );
}
