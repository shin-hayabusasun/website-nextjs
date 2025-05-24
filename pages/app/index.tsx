import{Header} from "../../components/Header.js";
import LinkLink from "next/link";


export default function APP() {
  return (
    <div className="appmoji ">
      <Header />
      <div className="center-content">
        <LinkLink href="/app/ir_url" className="modern-button">
          IR情報自動化アプリ
        </LinkLink>
      </div>
    </div>
  );
}