import { useState } from "react";
import { useRouter } from "next/router";
import{Header} from "../../components/Header.js";
import "@/styles/style.css";
import "@/styles/app.css";


export default function Ir() {
const [url, setUrl] = useState("");
const router = useRouter();

const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
        const res = await fetch("https://website-nextjs-dd/api/ir", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ "url": url }),
        });

        if (!res.ok) {
            console.error("Error: Failed to fetch data from API");
            return;
        }

        const result = await res.json();

        console.log("API Responseda:", result.result);

        router.push({
            pathname: "/app/ir_url_result",
            query: { msg: result.result },
        });
    } catch (error) {
        console.error("Error occurred:", error);
    }
};



  return (
    <div className="appmoji">
      <Header />
      <div className="center"> 
      <div style={{fontSize: "30px"}}>IR PDFをホームページから取得</div>
      <p>IR情報を企業のホームページを指定することで自動取得します。</p>

      <form onSubmit={handleSubmit}>
      <input type="text" value={url} onChange={(e) => setUrl(e.target.value)} className="input-field" placeholder="URLを入力してください" ></input>
      <button type="submit" className="button">取得</button>
      </form>

      </div>
    </div>
  );
}