import "@/styles/style.css";
export function Subtile(props) {
    return(
        
        <div class="fix">
            
           <img class="background-video"  src="/back.jpeg" />
     
    
        <div class="wrapper">
          <div class="block"></div>
        
          <div class="text-top">
            <div>{props.dep}</div>
            <div>{props.dep}</div>
          </div>
         <div class="block-tile"></div>
         <div class="block-tile1"></div>
          <div class="text-bottom">{props.tile}</div>
        </div>
      </div>
      
    )
}
