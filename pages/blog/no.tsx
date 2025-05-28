import{Header} from "../../components/Header.js";



export default function No() {
  return (
    <div>
      
      <Header />  
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
       ログインしていないかadminでログインできていません。新規ブログはadminだけが操作できます </div>
   </div>

  );
}