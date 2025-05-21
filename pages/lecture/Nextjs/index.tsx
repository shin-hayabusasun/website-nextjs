import Link from "next/link.js";
import{Header} from "../../../components/Header.js";

export default function Next() {
  return (
    <div>
      
      <Header />  
     
      <Link href="/lecture/Ai/algo">AIのアルゴリズム</Link>
   </div>

  );
}