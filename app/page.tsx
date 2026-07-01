import { About } from "@/sections/About";
import { Contact } from "@/sections/Contact";
import { FAQ } from "@/sections/FAQ";
import { Footer } from "@/sections/Footer";
import { Header } from "@/sections/Header";
import { Hero } from "@/sections/Hero";
import { Portfolio } from "@/sections/Portfolio";
import { Process } from "@/sections/Process";
import { Services } from "@/sections/Services";
import { Testimonials } from "@/sections/Testimonials";

export default function Home() {
  return <main><Header/><Hero/><About/><Portfolio/><Services/><Process/><Testimonials/><FAQ/><Contact/><Footer/></main>;
}
