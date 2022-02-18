import "./Entete.scss";
import Avatar from "@mui/material/Avatar";

export default function Entete() {
    return (
        <header className='Entete'>
            <p>Signets</p>
            <nav>
                <a href="#">Contactez-nous</a>
                <Avatar alt="" src="/images-dossier/logo.png" />
            </nav>
        </header>
    );
}