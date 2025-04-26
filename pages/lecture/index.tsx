import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import{Defou} from "../../components/Defou.js";
import{Subtile} from "../../components/Subtile.js";
import{Header} from "../../components/Header.js";
import{Topbotton} from "../../components/Topbotton.js";
import{Desc} from "../../components/Desc.js";
import "@/styles/style.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Blog() {
  return (
    <div>
      
      <Header />  
  <div>blog</div>
   </div>

  );
}