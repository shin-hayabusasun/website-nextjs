import {useState,useEffect } from "react";
import{Header} from "../../components/Header.js";
import { useRouter } from "next/router";

export default function Create() {
    const router = useRouter();
    const [title, setTitle] = useState("");
    const [body, setbody] = useState("");

    const Chek = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/login_admin", {
            method: "GET",
            headers: { "Content-Type": "application/json" },
            credentials: "include",
        });

        if (!res.ok) {
          router.push({
            pathname: "/blog/no"
        });
        }

        const re = await res.json();
        console.log("con:",re.re);
        if(re.re==="Admin"){
          
        }
        else{
          router.push({
            pathname: "/blog/no"
        });
        }




    } catch (error) {
      router.push({
        pathname: "/blog/no"
    });
    }
    };

    useEffect(() => {
      Chek();
     }, []);

const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
        const res = await fetch("http://localhost:5000/api/blog", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            credentials: "include",
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
  <div >
    <Header />
    <div className="blog-create-center"> 
      <div className="blog-create-title">blog作成フォーム</div>
      <form onSubmit={handleSubmit} className="blog-create-form">
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="blog-create-input" placeholder="タイトルを入力して" />
        <input type="text" value={body} onChange={(e) => setbody(e.target.value)} className="blog-create-input" placeholder="内容を入力して" />
        <button type="submit" className="blog-create-btn">取得</button>
      </form>
    </div>
  </div>
);
}