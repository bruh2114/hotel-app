import './style.css';
import {Link} from "react-router-dom";

function Navigationbar(){
    return (
        <nav className="nav">
            <ul>
                <li>
                <a href="#">Home</a>
                </li>
                <li>
                <a href="#">Suites and rooms</a>
                </li>
                <li>
                <a href="#">Portfolio</a>
                </li>
                <li>
                <a href="#">Experiences</a>
                </li>
                <li>
                <a href="#">Contact us</a>
                </li>
                <li>
                    <Link to="/login"><button>Sign in</button></Link>
                </li>
            </ul>
        </nav>
    )
    }
    
    export default Navigationbar;