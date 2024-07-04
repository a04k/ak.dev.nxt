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
      <body className="mt-12 lg:mt-0 lg:m-0 bg-gradient-to-b from-neutral-100 to-beige-300 dark:from-black dark:to-dPurp-700">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <Nav/>
          <main className="min-h-screen ml-5 mr-5 2xl:ml-6 xl:ml-32 lg:ml-28 lg:mr-24 lg:mt-16 md:px-6 lg:px-24 xl:px-32 2xl:px-64">
            {children}
          </main>
          <Footer/>
        </ThemeProvider>
      </body>
    </html>
  );
}