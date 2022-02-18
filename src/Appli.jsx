import './Appli.scss';
import Entete from './Entete';
import ListeAffiche from './ListeAffiche';
import FabIcon from './FabIcon';

export default function Appli() {
  return (
    <div className="Appli">
              <Entete />
              <ListeAffiche />
              <FabIcon />
    </div>
  );
}