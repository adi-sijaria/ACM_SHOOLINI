import Navbar from "@/components/Navbar";
import { Banner } from "flowbite-react";
import Image from "next/image";
import About from "@/components/About";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <main className="">
      <Navbar/>
      <Banner/>
      <About/>
      <Footer/>
    </main>
  );
}
