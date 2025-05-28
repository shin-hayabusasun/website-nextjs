import React, { useState } from "react";
import Link from "next/link";
import{Header} from "../../components/Header.js";
import { useRouter } from "next/router";


const Login = () => {
  const router = useRouter();
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // 仮のバリデーション
    if (!user || !password) {
      setError("メールアドレスとパスワードを入力してください。");
      return;
    }
    setError("");
   
    
    try {
        const res = await fetch("http://localhost:5000/api/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            credentials: "include",
            body: JSON.stringify({"username": user, "password": password}),
        });

        if (!res.ok) {
            console.error("Error: Failed to fetch data from API");
            return;
        }

        const result = await res.json();

        console.log("API Responseda:", result.message);

        if (result.message === "Login successful") {
            alert("ログインしました！");
            router.push({
              pathname: "/blog"
          });

            
        } else {
            setError("メールアドレスまたはパスワードが間違っています。");
        }

        
    } catch (error) {
        console.error("Error occurred:", error);
    }


   
  };

  return (
    <div>
      <Header />
    <div style={{ maxWidth: 400, margin: "40px auto", padding: 24, border: "1px solid #ccc", borderRadius: 8,color: "black" }}>
      
        <Link href="/login/signup" style={{ textAlign: "center", marginBottom: 24 }}>新規登録</Link>
      <h2>ログイン</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: 16 }}>
          <label>
            メールアドレス<br />
            <input
              type="email"
              value={user}
              onChange={e => setUser(e.target.value)}
              style={{ width: "100%", padding: 8, marginTop: 4 }}
              required
            />
          </label>
        </div>
        <div style={{ marginBottom: 16 }}>
          <label>
            パスワード<br />
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              style={{ width: "100%", padding: 8, marginTop: 4 }}
              required
            />
          </label>
        </div>
        {error && <div style={{ color: "red", marginBottom: 16 }}>{error}</div>}
        <button type="submit" style={{ width: "100%", padding: 10 }}>ログイン</button>
      </form>
    </div>
    </div>
  );
};

export default Login;