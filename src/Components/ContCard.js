import { useState } from "react";
var clicked = 0;
export default function ContCard(props){
    const [msg , setMsg] = useState('Click to copy');
    function copy(){
        navigator.clipboard.writeText(props.Descrption);
        clicked = clicked ? 0 : 1 ;
        clicked ? setMsg('Copied!') : setMsg('Click to copy');
        clicked = 0;
    }

    return <div className="card" style={{width: '29em',justifyContent:'center',display:'flex'}} onClick={copy}>
        <div className="tooltip">{msg}</div>
        <div>
        <div className="icon" style={{fontSize: '4.5em'}}><i className={props.iconClass}></i></div>
        <div className="info">
            <h3>{props.title}</h3>
            <p style={{fontSize: '1.5em'}}>{props.Descrption}</p>
        </div>
        </div>
    </div>;
}