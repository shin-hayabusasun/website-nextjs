import {useState,useEffect } from "react";
import{Header} from "../../components/Header.js";
import type { GetServerSidePropsContext} from "next";

type BlogData = {
  id: number;
  title: string;
  body: string;
  createdAt: string;
}



export async function getServerSideProps(context: GetServerSidePropsContext) {
    const { id } = context.params as { id: string }; // Extract the id from the URL parameters
    return {
        props: { id }, // Pass the id to the page component as a prop
    };
}


export default function Blogone({id}: { id: number }) {

  const [blog, setBlog] = useState<BlogData | null>(null);

   const fetchData = async () => {
      try {
          const res = await fetch(`http://127.0.0.1:5000/api/blog/${id}`, {
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
  
 useEffect(() => {
    fetchData();
  }, []);
    return (
        <div>
        <Header />
        {blog ? (
            <div
                key={blog.id}
                style={{
                    background: "#f5f5f5",
                    border: "1px solid #e0e0e0",
                    borderRadius: "10px",
                    padding: "32px",
                    margin: "32px auto",
                    maxWidth: "700px",
                    boxShadow: "0 4px 16px rgba(0,0,0,0.07)",
                    color: "black"
                }}
            >
                <h2
                    style={{
                        margin: "0 0 16px 0",
                        fontSize: "2rem",
                        color: "black"
                    }}
                >
                    {blog.title}
                </h2>
                <p
                    style={{
                        margin: "0 0 24px 0",
                        color: "#666",
                        fontSize: "0.95rem"
                    }}
                >
                    {blog.createdAt}
                </p>
                <p
                    style={{
                        margin: "0",
                        lineHeight: "1.8",
                        fontSize: "1.1rem"
                    }}
                >
                    {blog.body}
                </p>
            </div>
        ) : (
            <div>
                <h2>Loading...</h2>
            </div>
        )}
        </div>
    );
}
