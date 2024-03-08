import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <Navbar />
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     <h1>Hello Its Me Bishnu Timilsaina</h1>
    <Button>Download CV</Button>
    </main>
    </>
  );
}
