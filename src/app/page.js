import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Banner from "@/components/Banner";
import Management from "@/components/Management";
import Footer from "@/components/Footer";
import OperationTeam from "@/components/OperationTeam";
export default function Home() {
  return (
    <main className="">
      <Navbar/>
      <Banner />
      <About />
      <Management />
      <OperationTeam />
      <Footer/>
    </main>
  );
}
