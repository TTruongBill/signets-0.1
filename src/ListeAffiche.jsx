import './ListeAffiche.scss';
import Affiche from './Affiche'
import lesAffiches from './data/produit.json';

export default function ListeAffiche(){
    return(
        <section className="ListeAffiche">
            {
                lesAffiches.map(p => <Affiche key={p.id} pid={p.id} titre={p.titre} couleur={p.couleur} date={p.date} link={p.link}/>)
            }
        </section>
    )
}