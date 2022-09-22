import { NavLink } from "react-router-dom"



export default function Menu(){



    return(
        <div>
            <ul>
                <li><NavLink to="/"    className={({isActive}) => (isActive ? "activeLink" : undefined )}> Home </NavLink></li>
                <li><NavLink to="/Add" className={({isActive}) => (isActive ? "activeLink" : undefined )}>Add Book</NavLink> </li>
                <li><NavLink to="/List"className={({isActive}) => (isActive ? "activeLink" : undefined )}>Books List</NavLink> </li>
            </ul>
        </div>
    )
}