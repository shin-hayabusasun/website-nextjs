import React, { useState } from "react";
import Link from "next/link";

const Signup = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async(e: React.FormEvent) => {
    e.preventDefault();
    if (!user || !password || !confirm) {
      setError("全ての項目を入力してください。");
      return;
    }
    if (password !== confirm) {
      setError("パスワードが一致しません。");
      return;
    }
    setError("");
    // ここでサインアップ処理を実装
    try {
        const res = await fetch("http://127.0.0.1:5000/api/signup", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
           
            body: JSON.stringify({"username": user, "password": password}),
        });

        if (!res.ok) {
            console.error("Error: Failed to fetch data from API");
            return;
        }

        const result = await res.json();

        console.log("API Responseda:", result.message);
        if (result.message === "User created successfully") {
            alert("サインアップしました！");
        }

        
    } catch (error) {
        console.error("Error occurred:", error);
    }


    
  };

  return (
    <div style={{ maxWidth: 400, margin: "40px auto", padding: 24, border: "1px solid #ccc", borderRadius: 8,color: "black"  }}>
      <Link href="/login" style={{ textAlign: "center", marginBottom: 24 }}>ログインへ戻る</Link>
      <h2>新規登録</h2>
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
        <div style={{ marginBottom: 16 }}>
          <label>
            パスワード（確認）<br />
            <input
              type="password"
              value={confirm}
              onChange={e => setConfirm(e.target.value)}
              style={{ width: "100%", padding: 8, marginTop: 4 }}
              required
            />
          </label>
        </div>
        {error && <div style={{ color: "red", marginBottom: 16 }}>{error}</div>}
        <button type="submit" style={{ width: "100%", padding: 10 }}>新規登録</button>
      </form>
    </div>
  );
};

export default Signup;