import{Header} from "../../components/Header.js";

export default function Blog() {
  return (
    <div>
      
      <Header />  
      <div className="appmoji">ブログの動作動画</div>
     <video   muted controls>
  <source src="/blog.mp4" type="video/mp4" />
</video> 
   </div>

  );
}