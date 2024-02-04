import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Banner from "@/components/Banner";
import Management from "@/components/Management";
export default function Home() {
  return (
    <main className="">
      <Navbar/>
      <Banner />
      <Management />
    </main>
  );
}
