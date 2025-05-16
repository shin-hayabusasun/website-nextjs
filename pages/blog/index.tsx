import { useEffect,useState } from "react";
import{Header} from "../../components/Header.js";
import Link from "next/link.js";
type BlogData = {
  id: number;
  title: string;
  body: string;
  createdAt: string;
}

export default function Blog() {

  const [blog, setBlog] = useState<BlogData[]>([]);

  // Fetch data from the API
  const fetchData = async () => {
      try {
          const res = await fetch("http://127.0.0.1:5000/api/blog", {
              method: "GET",
              headers: { "Content-Type": "application/json" },
          });

          if (!res.ok) {
              console.error("Error: Failed to fetch data from API");
              return;
          }

          const result = await res.json();
          setBlog(result);
          
      } catch (error) {
          console.error("Error occurred:", error);
      }
  };
  

  // useEffectでfetchDataを呼び出す
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      
      <Header />  
      <Link href="/blog/create" style={{ textDecoration: "none", color: "black" }} >ブログ作成ページ</Link>
      {blog.map((item) => (
        <div key={item.id} style={{ color: "black" }}>
          <h2>{item.title}</h2>
          <p>{item.body}</p>
          <p>{item.createdAt}</p>
        </div>
      ))}
   </div>

  );
}