import Image from 'next/image';
import Link from 'next/link'; // 修正: 正しいパスからインポート
import "@/styles/header.css";
import { Margarine } from 'next/font/google';

export function Header() {
    return (
      <header>
        <div className="fix11">
          <div>
            <Image style={{marginLeft:'30px'}} src="/aicon.png" width={50} height={50} loading="lazy" />
          </div>
          <div class="fix1">
            <div style={{ marginLeft:'15px', fontSize: '40px' }}>HAYABUSA</div>
            <nav style={{marginLeft: '700px'}}>
              <ul class="fix2">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/app">アプリ</Link>
                </li>
                <li>
                  <Link href="/blog">ブログ</Link>
                </li>
                <li>
                  <Link href="/lecture">講座</Link>
                </li>
                <li>
                  <Link href="/contact">問い合わせ</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    );
}