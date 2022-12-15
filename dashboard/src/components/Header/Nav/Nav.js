import { Overview, Tickets, Ideas, Contacts, Agents, Articles, Settings, Subscription} from "../../../assets/images/icons";
import "./nav.css"
import { Link } from "./Link";

const svg = [
    {
        "img": <Overview/>,
        "name": "Overview"
    },
    {
        "img": <Tickets/>,
        "name": "Tickets"
    },
    {
        "img": <Ideas/>,
        "name": "Ideas"
    },
    {
        "img": <Contacts/>,
        "name": "Contacts"
    },
    {
        "img": <Agents/>,
        "name": "Agents"
    },
    {
        "img": <Articles/>,
        "name": "Articles"
    },
    {
        "img": <Settings/>,
        "name": "Settings"
    },
    {
        "img": <Subscription/>,
        "name": "Subscription"
    },
]

export const Nav = () =>{
    return(
        <nav className="site-nav">
            <ul className="nav-list">
                {svg.map(element => <li className="nav-item" key={element.name}><Link >{element.img}{element.name}</Link></li>)}
            </ul>
        </nav>
    )
}
