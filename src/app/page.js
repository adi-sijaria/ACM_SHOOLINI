import Navbar from "@/components/Navbar";
import { Banner } from "flowbite-react";
import Image from "next/image";
export default function Home() {
  return (
    <main className="">
      <Navbar/>
      <Banner />
    </main>
  );
}
