var dark=0;
var open=0;

export function openNav() {
    if(!open){
        document.getElementById("mySidenav").style.width = "17em";
        document.getElementById("curtain").style.width = "100%";
        open=1;
    }else{
        document.getElementById("mySidenav").style.width = "0";
        document.getElementById("curtain").style.width = "0";
        open=0;
    }
}

function toggleMode() {
    const top = window.scrollY;
    const cards = document.querySelectorAll(".card");
    const project_cards = document.querySelectorAll(".project-card");
    const header = document.querySelector(".header");
    const skills = document.querySelectorAll(".skills");
    const titles = document.querySelectorAll(".title");

    dark=!dark ? 1 : 0 ;

    if(dark && top >= 100){
        header.classList.add("d-active");
        header.classList.remove("active")}
    else if(!dark && top >= 100){
        header.classList.add("active");
        header.classList.remove("d-active")
    }
    
    document.querySelector(".personal-img").classList.toggle("d-personal-img");
    document.querySelector(".main-btn").classList.toggle("d-main-btn");
    document.getElementById("main").classList.toggle("d-main");
    document.querySelector(".navigation").classList.toggle("d-navigation");
    document.querySelector(".footer-title").classList.toggle("d-footer-title");
    document.getElementById("modeBtn").classList.toggle("fa-moon");
    document.getElementById("modeBtn").classList.toggle("fa-sun");
    document.body.classList.toggle("d-body");
    document.querySelector(".sidenavLinks").classList.toggle("d-sidenavLinks");

    cards.forEach((card) => {
        card.classList.toggle("d-card");
    });
    project_cards.forEach((card) =>{
        card.classList.toggle("d-project-card");
    })
    skills.forEach((skill) =>{
        skill.classList.toggle("d-skills");
    })
    titles.forEach((title) =>{
        title.classList.toggle("d-title");
    })
}

window.onscroll = function() {
    var top = window.scrollY;
    if(top >= 100){

    if(dark){document.querySelector(".header").classList.add("d-active")
    }else{ document.querySelector(".header").classList.add("active")}

    }else{

    if(dark){document.querySelector(".header").classList.remove("d-active")
    }else{ document.querySelector(".header").classList.remove("active")}

    }
}

export default function Header(){

    return <header className="header">
    <i onClick={openNav} className="fa-bars fa-solid"></i>
    <a href="#main"><img className="logo" src={require("../Assets/Logo.png")} alt="Muhammad's logo" /></a>
    <div className="navmoon">
    <nav className="navigation"> 
    <a href="#services">Services</a>
    <a href="#projects">Projects</a>
    <a href="#contact">Contact</a>
    </nav>
    <div style={{width:'2em',marginLeft:'1.5em'}} onClick={toggleMode}><i className="fa-solid fa-moon" id="modeBtn"></i></div>
    </div>
    </header>;
}