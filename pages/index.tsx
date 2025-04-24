import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import{Defou} from "../components/Defou.js";
import{Subtile} from "../components/Subtile.js";
import{Header} from "../components/Header.js";
import{Topbotton} from "../components/Topbotton.js";
import{Desc} from "../components/Desc.js";
import "@/styles/style.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div>
      
      <Header />  
   <Defou />
   <Desc />
   <Topbotton tile={["ブログ","アプリ"]} url={["aaa","aaaa"]} />
   <Subtile  dep="Hayabusa&nbsp;Punch&nbsp;Man&nbsp;is&nbsp;very&nbsp;much." tile="Start" />
   <div></div>
   </div>

  );
}
