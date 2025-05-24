import Link from "next/link.js";
import { Header } from "../../components/Header.js";

const linkStyle: React.CSSProperties = {
  display: 'block',
  width: '100%',
  padding: '14px 0',
  borderRadius: '8px',
  background: 'linear-gradient(90deg, #e0e7ff 0%, #f0fdfa 100%)',
  color: '#222',
  fontWeight: 'bold',
  fontSize: '1.1rem',
  textAlign: 'center' as const,
  textDecoration: 'none',
  marginBottom: '8px',
  boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
  transition: 'background 0.2s, color 0.2s',
};

export default function Blog() {
  return (
    <div
      style={{

      }}
    >
      <Header />
      <div style={{marginBottom: '40px'}} />
      <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '24px', color: '#222', textAlign: 'center' }}>
        ポートフォリオ一覧
      </h2>
      <div style={{width: '100%', maxWidth: '420px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '18px'}}>
        <Link href="/lecture/lecture-blogtest" style={linkStyle}>Flaskを使った実際の動作画面</Link>
         <Link href="/lecture/n8n" style={linkStyle}>gcp,slackを用いたrag</Link>
        <Link href="/lecture/Java" style={linkStyle}>javaのポートフォリオ</Link>
        <Link href="/lecture/n8n" style={linkStyle}>n8nのポートフォリオ</Link>
        <Link href="/lecture/C" style={linkStyle}>C/C++のポートフォリオ</Link>
        <Link href="/lecture/infra" style={linkStyle}>インフラのポートフォリオ</Link>
        <Link href="/lecture/blender" style={linkStyle}>blenderのポートフォリオ</Link>
        <Link href="/lecture/Nextjs" style={linkStyle}>next.jsのポートフォリオ</Link>
        <Link href="/lecture/python" style={linkStyle}>pythonのポートフォリオ</Link>
      </div>
    </div>
  );
}