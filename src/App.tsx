import Navbar from "@/components/scenes/navbar";
import { useEffect, useState } from "react";
import { SelectedPage } from "@/components/shared/types";
import useSelectePageStore from "@/hooks/useSelectedPageStore";
import Home from "@/components/scenes/home";
import Benefits from "@/components/scenes/benefits";
import OurClasses from "@/components/scenes/ourClasses";
import ContactUs from "@/components/scenes/contactUs";
import Footer from "./components/scenes/footer";

function App() {
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);
  const { setSelectedPage } = useSelectePageStore();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      } else setIsTopOfPage(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-gray-20 app">
      <Navbar isTopOfPage={isTopOfPage} />
      <Home />
      <Benefits />
      <OurClasses />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
