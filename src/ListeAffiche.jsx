import './ListeAffiche.scss';
import Affiche from './Affiche'
import lesAffiches from './data/dossier.json';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

export default function ListeAffiche(props){
    return(
        <section className="ListeAffiche">
            {
                lesAffiches.map(p => <Affiche pid={p.id} titre={p.titre} couleur={p.couleur} date={p.date} />)
            }
            <Fab color="default" aria-label="add" size="medium">
                <AddIcon />
            </Fab>
        </section>
    )
}