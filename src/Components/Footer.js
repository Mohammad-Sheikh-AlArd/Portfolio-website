import { Links } from "../Data";

export default function Footer(){

    return <footer className="footer">
    <p className="footer-title">Copyrights @ <span>Muhammad Sheikh alard</span></p>
    <div className="social-icons">
        <a href={Links.Facebook}><i className="fa-brands fa-facebook"></i></a>
        <a href={Links.Telegram}><i className="fa-brands fa-telegram"></i></a>
        <a href={Links.GitHub}><i className="fa-brands fa-github"></i></a>
        <a href={Links.LinkedIn}><i className="fa-brands fa-linkedin"></i></a>
    </div>
</footer>;
}