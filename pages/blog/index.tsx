import { useEffect, useState } from "react";
import { Header } from "../../components/Header.js";
import Link from "next/link.js";
type BlogData = {
  id: number;
  title: string;
  body: string;
  createdAt: string;
};

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
      <Link
        href="/blog/create"
        style={{
          textDecoration: "none",
          color: "#fff",
          background: "black",
          padding: "8px 16px",
          borderRadius: "6px",
          display: "inline-block",
          margin: "16px 0",
        }}
      >
        ブログ作成ページ
      </Link>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          marginTop: "24px",
        }}
      >
        {blog.map((item) => (
          <Link
            href={`/blog/${item.id}`}
            key={item.id}
            style={{
              textDecoration: "none",
              color: "#222",
              background: "#f5f5f5",
              border: "1px solid #e0e0e0",
              borderRadius: "8px",
              padding: "20px",
              transition: "box-shadow 0.2s",
              boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
            }}
          >
            <h2
              style={{
                margin: "0 0 8px 0",
                fontSize: "1.3rem",
              }}
            >
              {item.title}
            </h2>
            <p
              style={{
                margin: "0 0 4px 0",
                color: "#666",
              }}
            >
              {item.createdAt}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}