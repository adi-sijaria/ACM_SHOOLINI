import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Banner from "@/components/Banner";
import Management from "@/components/Management";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <main className="">
      <Navbar/>
      <Banner />
      <Management />
      <Footer/>
    </main>
  );
}
