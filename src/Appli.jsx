import './Appli.scss';
import Entete from './Entete';
import ListeAffiche from './ListeAffiche';

export default function Appli() {
  return (
    <div className="Appli">
              <Entete/>
              <ListeAffiche/>
    </div>
  );
}