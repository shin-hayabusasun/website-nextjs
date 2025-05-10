import "@/styles/style.css";
import Image from 'next/image';
export function Subtile(props) {
    return(
        
        <div class="fix">
            
       
     
    
        <div class="wrapper">
          <div class="block"></div>
        
          <div class="text-top">
            <div>{props.dep}</div>
            <div>{props.dep}</div>
          </div>
         <div class="block-tile"></div>
         <div class="block-tile1"></div>
         <Image class="text-bottom" src={props.tile}  width={350} height={200}  loading="lazy" />
          
        </div>
      </div>
      
    )
}
