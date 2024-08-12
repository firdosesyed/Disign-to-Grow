import { useGSAP } from "@gsap/react";
import "./App.css";
import Blur from "./Components/Blur";
import Boxes from "./Components/Boxes";
import Container from "./Components/Container";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Services from "./Components/Services";
import Promotion from "./Components/Promotion";

function App() {
  return (
    <div className=" h-screen w-screen  overflow-y-hidden overflow-x-hidden   text-[#2A2A2A] ">
      <Navbar />
      <Hero />
      <Boxes />
      <Blur />
      <Container />
      <Services />
      <Promotion />
    </div>
  );
}

export default App;
