import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import{Subtile} from "../components/Subtile.js";
import{Header} from "../components/Header.js";
import{Desc} from "../components/Desc.js";
import "@/styles/style.css";




export default function Home() {
  return (
    <div>
    <video className="background-video" autoPlay muted loop>
  <source src="/bard.mp4" type="video/mp4" />
</video> 
      
      <Header />  
   
   <Desc />
  

   <Subtile  dep="Hayabusa&nbsp;Punch&nbsp;Man&nbsp;is&nbsp;very&nbsp;much." tile="/star.png" />
   <div
      style={{
        textAlign: "center", // 中央揃え
        fontSize: "20px", // テキストサイズを調整
        lineHeight: "1.8", // 行間を調整
        margin: "20px auto", // 上下左右の余白を設定
        maxWidth: "1400px", // 最大幅を設定して改行を制御
        background: "rgb(255, 255, 255)", // 背景色を文字列として指定
        color: "rgba(0, 0, 0, 0.68)",
        fontWeight: 900,
    border: "2px solid rgba(0, 0, 0, 0.2)", // ボーダーを追加
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)", // シャドウを追加
    padding: "20px", // 内側の余白を追加
    borderRadius: "8px",
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

    <Image className="text-bottom" src="/about.png"  width={350} height={200}  loading="lazy" alt="aa" />
    
    <div style={{marginTop:'70px'}}></div>
    <Subtile dep="BLOG&nbsp;is&nbsp;many&nbsp;Information&nbsp;about&nbsp;me" tile="/blog.png" />
    <Subtile dep="APP&nbsp;is&nbsp;APP&nbsp;APP&nbsp;APP&nbsp;me." tile="/app.png" />

   </div>

  );
}
