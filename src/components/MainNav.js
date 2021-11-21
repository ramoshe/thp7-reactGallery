import { NavLink } from "react-router-dom";
import { ghpURL } from "../config";

const MainNav = () => 
    <nav className="main-nav">
        <ul> 
            <li><NavLink to={`${ghpURL}/cat`}>cat</NavLink></li>
            <li><NavLink to={`${ghpURL}/bird`}>bird</NavLink></li>
            <li><NavLink to={`${ghpURL}/dog`}>dog</NavLink></li>
        </ul>
    </nav>;

export default MainNav;