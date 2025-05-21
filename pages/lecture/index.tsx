import Link from "next/link.js";
import{Header} from "../../components/Header.js";

export default function Blog() {
  return (
    <div>
      
      <Header />  
      <Link href="/lecture/lecture-blogtest">Flaskを使った実際の動作画面</Link>
      <Link href="/lecture/Java">javaのポートフォリオ</Link>
      <Link href="/lecture/n8n">n8nのポートフォリオ</Link>
      <Link href="/lecture/C">C/C++のポートフォリオ</Link>
      <Link href="/lecture/infra">インフラのポートフォリオ</Link>
      <Link href="/lecture/blender">blenderのポートフォリオ</Link>
      <Link href="/lecture/Nextjs">next.jsのポートフォリオ</Link>
      <Link href="/lecture/python">pythonのポートフォリオ</Link>
   </div>

  );
}