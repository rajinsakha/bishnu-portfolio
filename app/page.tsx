import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Services from "@/components/Services";
import { Button } from "@/components/ui/button";


export default function Home() {
  return (


    <main className="">
     <Header />
     <About />
     <Services />
     <Contact />
     <Footer />
    </main>
  );
}
