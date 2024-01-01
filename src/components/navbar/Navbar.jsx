import "./navbar.css";
import {Link} from "react-router-dom";


function Navbar(props){


    return(
        <div className="headerWrapper">
       <div className="container">
        <div className="header">
        <h3>{props.title}</h3>
        <ul>
            <li>
               <Link to={"/"}> لیست مقالات </Link>
                </li>
            <li>
                <Link to={"/newArticle"}> ساخت مقالات</Link> 
                 </li>
            <li>
                <Link to={"/about"}>درباره</Link>
                </li>
            
       </ul>
       </div> 
       </div>
       </div>
    );
}

export default Navbar;