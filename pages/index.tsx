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
   
   <Desc />
  

   <Subtile  dep="Hayabusa&nbsp;Punch&nbsp;Man&nbsp;is&nbsp;very&nbsp;much." tile="Start" />
   <div
      style={{
        textAlign: "center", // 中央揃え
        fontSize: "20px", // テキストサイズを調整
        lineHeight: "1.8", // 行間を調整
        margin: "20px auto", // 上下左右の余白を設定
        maxWidth: "900px", // 最大幅を設定して改行を制御
        background: "rgba(83, 88, 97, 0.68)", // 背景色を文字列として指定
      }}
    >
      はじめまして。当サイトにお越しいただきありがとうございます!  
      <br />
      このWebページは、趣味の一環として作ってみたものです。まだまだ準備中の部分も多いですが、今後は以下のようなコンテンツを展開していく予定です。  
      <br />
      <strong>ブログの開設:</strong> データや設定が整い次第、ブログをスタートします。日々の学びや気づき、技術メモなどを書いていきたいと思っています。  
      <br />
      <strong>アプリケーションの提供:</strong> 自作の便利ツールやアプリケーションを公開していく予定です。  
      <br />
      <strong>技術系講座ページの作成:</strong> プログラミングやWeb技術など、技術系の講座ページも用意するつもりです。  
      <br />
      少しずつ内容を充実させていきますので、ぜひまた覗いてみてください!
    </div>
    <div style={{marginTop:'70px'}}></div>
    <Subtile dep="BLOG&nbsp;is&nbsp;many&nbsp;Information&nbsp;about&nbsp;me" tile="BLOG" />
   </div>

  );
}
