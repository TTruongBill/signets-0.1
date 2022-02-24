import './ListeAffiche.scss';
import Affiche from './Affiche'
import lesAffiches from './data/produit.json';

export default function ListeAffiche(){
    return(
        <section className="ListeAffiche">
            {
                lesAffiches.map(affiche => <Affiche key={affiche.id} pid={affiche.id} titre={affiche.titre} couleur={affiche.couleur} date={affiche.date} link={affiche.link}/>)
            }
        </section>
    )
}