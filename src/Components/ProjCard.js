export default  function ProjCard(props){

    return <div className="project-card">
    <div className="project-image"><img src={props.img} alt={props.category}/></div>
    <div className="project-info">
        <p className="project-category">{props.category}</p>
        <strong className="project-title">
            <span>{props.title}</span>
            <a href={props.moreDetails} className="more-details">More details</a>
        </strong>
    </div>
    <div style={{padding:'1em', display:'flex',gap:'0.6em',flexWrap:'wrap'}}>
        {props.skills}
    </div>
</div>;

}