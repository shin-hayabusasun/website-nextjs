import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import{Defou} from "../../components/Defou.js";
import{Subtile} from "../../components/Subtile.js";
import{Header} from "../../components/Header.js";
import{Topbotton} from "../../components/Topbotton.js";
import{Desc} from "../../components/Desc.js";
import "@/styles/style.css";
import "@/styles/app.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Ir() {
  return (
    <div className="appmoji">
      <Header />
      <div className="center"> 
      <div style={{fontSize: "30px"}}>IR PDFをホームページから取得</div>
      <p>IR情報を企業のホームページを指定することで自動取得します。</p>
      <input className="input-field" placeholder="URLを入力してください"></input>
      <button className="button">取得</button>
      </div>
    </div>
  );
}