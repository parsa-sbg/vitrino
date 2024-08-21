import Logo from "../components/Logo"
import QuickAccess from "../components/homePage/QuickAccess";
import AboutVitrino from "../components/homePage/AboutVitrino";
import SearchCity from "../components/homePage/SearchCity";
import PopularCities from "../components/homePage/PopularCities";
import Enamad from "../components/homePage/Enamad";
import Socials from "../components/homePage/Socials";


export default function Home() {
  return (


    <div className="container flex flex-col items-center gap-5 sm:gap-10 max-w-[566px] mx-auto pb-5 pt-4 md:pt-10">


      <Logo />

      <QuickAccess />

      <AboutVitrino />

      <SearchCity />

      <PopularCities />

      <Enamad />

      <Socials />

    </div>

  )
}