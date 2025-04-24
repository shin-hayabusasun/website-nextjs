import Image from 'next/image'
import Link from 'next/image'

export  function Fttor() {
    return (
    
        <div>
          <div>
            <Image src="/aicon.png" width={500}  height={500}  loading="lazy" />
          </div>
          <div>
            Hayabusa
          </div>
          <div>お問い合わせSNS</div>

          <ul>
            <li>
            <a href="">
            <img src="" alt="sns"/>
            </a>
            </li>
            <li>
            <a href="">
            <img src="" alt="sns"/>
            </a>
            </li>
            <li>
            <a href="">
            <img src="" alt="sns"/>
            </a>
            </li>
          </ul>
        </div>
        
      
    
    );
  }