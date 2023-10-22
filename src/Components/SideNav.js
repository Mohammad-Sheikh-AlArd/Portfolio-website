import { openNav } from './Header';

export default  function SideNav(){

    return <><div id="mySidenav" className="sidenav">
        <div style={{position:'absolute',top:'1%'}}>
        <img src={require('../Assets/me.jpg')} alt="Muhammad Sheikh alard" className="sidenavimg" />
        <div className="sidenavLinks">
            <a href="#main"><i className="fa-solid fa-house"></i><p>Main</p></a>
            <a href="#services"><i className="fa-solid fa-square-poll-horizontal"></i><p>Services</p></a>
            <a href="#projects"><i className="fa-solid fa-list-check"></i><p>Projects</p></a>
            <a href="#contact"><i className="fa-solid fa-id-card"></i><p>Contact</p></a>
        </div>
        </div>
        <div className="sidenavfooter"><h6 className="footer-title">Copyrights @ <span>Muhammad Sheikh alard</span><br/>2022-2023</h6></div>
    </div><div id="curtain" onClick={openNav}></div></> ;
}