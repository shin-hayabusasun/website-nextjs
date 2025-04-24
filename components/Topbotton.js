export function Topbotton(props) {
    const tile=props.tile;
    return(

        <div class="fixfix">
             <ul class="fixfix">
      {tile.map((t, index) => (
        <li  class="fixfix" key={index}><a class="btn-vertical-border" href={props.url[index]}>{t}</a></li>
      ))}
    </ul>
</div>
    )
}