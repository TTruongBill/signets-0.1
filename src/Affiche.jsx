import './Affiche.scss';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SortIcon from '@mui/icons-material/Sort';

export default function Affiche(props) {
    console.log(props.pid)
    return (
        
      <div className="Affiche">  
        <SortIcon variant='circular'/>
        <img src={"/images-dossier/" + props.pid + ".png"} alt="{props.pid}" className="Affiche_image"></img>
        <div className="Affiche_info">
            <h1>{props.titre}</h1>
            <p>{props.date}</p>
            <button><MoreVertIcon color="primary" variant='circular'/></button>
        </div>
       
      </div>
    );
  }