import Image from "next/image";
import Navbar from "./components/navbar/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar></Navbar>
      <h1 className="text-rose-500 text-2xl">
        Airbnb
      </h1>
    </div>
  );
}
