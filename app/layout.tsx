import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar/Navbar";
import RegisterModal from "./components/modals/RegisterModal";
import ToasterProvider from "./providers/ToasterProviders";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AirBnb",
  description: "Airbnb Clone",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={nunito.className}>
         <ToasterProvider/>
          <RegisterModal/>
          <Navbar/>
      {children}
      </body>
    </html>
  );
}
