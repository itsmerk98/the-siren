import { Link } from "react-router-dom";
import './css/dropdownlist.scss'
const DropdownList = (props) => {
    return (
        <div className="dropdown-mune">
            <Link to={props.path} className={`mune-link`}>{props.text}</Link>
        </div>
    );
}

export default DropdownList;