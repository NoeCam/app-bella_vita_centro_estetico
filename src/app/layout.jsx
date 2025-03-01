import "./globals.css";

import { Raleway } from "next/font/google";

import NavbarComponent from "@/components/navbar/NavbarComponent";
import FooterComponent from "@/components/footer/FooterComponent";
import Title from "@/components/title/Title";

export const metadata = {
  title: "Bella Vita",
  description: "Bella Vita - Centro estético",
};

const raleway = Raleway({
  weight: "400",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${raleway.className} flex flex-col min-h-screen bg-white text-black`}
      >
        <NavbarComponent />
        <main className="pb-12    md:flex-1 md:pb-2">
          <Title />
          {children}
        </main>
        <FooterComponent />
      </body>
    </html>
  );
}
