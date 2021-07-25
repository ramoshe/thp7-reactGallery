import { NavLink } from "react-router-dom";

const MainNav = ({ labels }) => 
    <nav className="main-nav">
        <ul>
            { labels.map( label => 
                <li><NavLink to={`/${ label }`} key={ label }>{ label }</NavLink></li>
            )}
        </ul>
    </nav>;

export default MainNav;