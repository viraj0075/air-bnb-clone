import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar/Navbar";
import Modal from "./components/modals/Modal";

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
          <Navbar/>
          <Modal title="Hello World" isOpen/>
      {children}
      </body>
    </html>
  );
}
