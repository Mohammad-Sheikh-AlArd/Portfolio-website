export default  function Section(props){

    return <section id={props.id} style={{backgroundColor:`${props.bgColor}`}}>
        <div className="title-container"><h2 className="title">{props.title}</h2></div>
        <div className="content">
            {props.containt}
        </div>
    </section>;
}