import{Header} from "../../components/Header.js";
import "@/styles/style.css";
import "@/styles/app.css";
import LinkLink from "next/link";


export default function APP() {
  return (
    <div className="appmoji">
      <Header />
      <LinkLink href="/app/ir_url" className="button">IR情報自動化アプリ</LinkLink>
    </div>
  );
}