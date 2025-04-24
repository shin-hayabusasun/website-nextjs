import Image from 'next/image'
import Link from 'next/image'

export  function Header() {
    return (
      <header>
        <div>
          <div>
            <Image src="/aicon.png" width={500}  height={500}  loading="lazy" />
          </div>
          <div>
            <div>Hayabusa</div>
          <nav>
            <ul>
                <li>
                  <a href="">Home</a>
                </li>
                <li>
                  <a href="">アプリ</a>
                </li>
                <li>
                  <a href="">ブログ</a>
                </li>
                <li>
                  <a href="">講座</a>
                </li>
                <li>
                  <a href="">問い合わせ</a>
                </li>
            </ul>
        </nav>
          </div>

        </div>
        </header>
      
    
    );
  }