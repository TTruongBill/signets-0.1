import './Affiche.scss';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SortIcon from '@mui/icons-material/Sort';

export default function Affiche(props) {
    return (
      <article className="Affiche">  
        <SortIcon className="SortIcon"/>
        <img src={"./images-dossier/" + props.pid + ".jpg"} alt={props.pid} className="Affiche_image"></img>
        <div className="Affiche_info" style={{backgroundColor: props.couleur}}>
            <a href={props.link}>{props.titre}</a>
            <p>{props.date}</p>
            <button className='VertIconContainer'>
              <MoreVertIcon className='VertIcon' color="primary" variant='circular'/>
            </button>
        </div>
      </article>
    );
  }
