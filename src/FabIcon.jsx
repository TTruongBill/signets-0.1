import "./FabIcon.scss"
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

export default function FabIcon() {

    return (
        <div className="IconPlus">
            <Fab color="primary" aria-label="add" size="medium">
                <AddIcon /> 
            </Fab>
        </div>
    );
}