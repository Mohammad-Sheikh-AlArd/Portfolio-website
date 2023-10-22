export default  function ServCard(props){

    return <div className="card" style={{width:'40em',display:'flex',alignItems:'center',border:'0.2em solid #FDB724'}}>
    <div style={{}}>
        <div className="icon"><i className={props.iconClass}></i></div>
        <div className="info">
            <h3>{props.title}</h3>
        </div>
    </div>
    <div style={{width:'1.1em',height:'15em',borderRadius:'100em',backgroundColor:'#FDB724',margin:'0 2em'}}></div>    
        <p style={{fontSize:'1.2em'}}>{props.Descrption}</p>
</div>;
}