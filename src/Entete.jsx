import "./Entete.scss";
import Avatar from "@mui/material/Avatar";

export default function Entete() {
    return (
        <header className='Entete'>
            <p><a href="https://github.com/k1polo/ex1-signets">Github de Tien</a></p>
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