import { Link } from './Nav/Link'
import { Nav } from './Nav'
import { DashboardLogo } from '../../assets/images/icons'
import "./header.css"

export const Header = (props) => {
  return (
    <header className="site-header">
      <div className="container">
        <div className="header-box">
        <a className="logo"><DashboardLogo/> Dashboard Kit</a>
        <Nav></Nav>
        </div>
      </div>
    </header>
  )
}
