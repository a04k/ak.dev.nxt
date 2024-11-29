import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "./Components/themeProvider";
import Footer from "./Components/Footer";
import { Nav } from "./Components/nav";

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
      <body className="mt-12 bg-gradient-to-b from-neutral-100 to-beige-300 dark:from-black dark:to-dPurp-700">
        <ThemeProvider attribute="class" defaultTheme="light">
          <Nav />
          <main className="min-h-screen 2xl:ml-10 xl:ml-26 xl:mr-22 lg:ml-32 lg:mr-24 lg:mt-16 px-2 md:px-6 lg:px-24 xl:px-32 2xl:px-64 mr-4 ml-4">
            {children}
          </main>
          <Footer/>
        </ThemeProvider>
      </body>
    </html>
  );
}