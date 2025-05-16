import {useState } from "react";
import{Header} from "../../components/Header.js";
import { useRouter } from "next/router";

export default function Create() {
    const router = useRouter();
    const [title, setTitle] = useState("");
    const [body, setbody] = useState("");
const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
        const res = await fetch("http://127.0.0.1:5000/api/blog", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ "title":title, "body": body }),
        });

        if (!res.ok) {
            console.error("Error: Failed to fetch data from API");
            return;
        }

        

        

        router.push({
            pathname: "/blog"
        });
    } catch (error) {
        console.error("Error occurred:", error);
    }
};
return(
<div className="appmoji">
      <Header />
      <div className="center"> 
      <div style={{fontSize: "30px"}}>blog作成フォーム</div>
     

      <form onSubmit={handleSubmit}>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="input-field" placeholder="タイトルを入力して" ></input>
        <input type="text" value={body} onChange={(e) => setbody(e.target.value)} className="input-field" placeholder="内容を入力して" ></input>
      <button type="submit" className="button">取得</button>
      </form>

      </div>
    </div>


);
}