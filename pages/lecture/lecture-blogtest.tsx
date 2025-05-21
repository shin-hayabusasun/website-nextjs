import{Header} from "../../components/Header.js";

export default function Blogv() {
  return (
    <div>
      
      <Header />  
      <h1 className="appmoji">ブログの動作動画</h1>
      <p>今回の動作環境ではFlaskが使用できないのでここでFlaskと合わせた動作を表示します</p>
     <video   muted controls>
  <source src="/blog.mp4" type="video/mp4" />
</video> 
   </div>

  );
}