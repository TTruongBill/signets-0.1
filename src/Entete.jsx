import "./Entete.scss";
import Avatar from "@mui/material/Avatar";

export default function Entete() {
    return (
        <header className='Entete'>
            <p>Signets</p>
            <nav>
                <a href="#">Nom Utilisateur</a>
                <Avatar 
                className="Profile" 
                alt="" 
                sx={{ width: 32, height: 32 }}
                src="/images-dossier/logo.png" />
            </nav>
        </header>
    );
}