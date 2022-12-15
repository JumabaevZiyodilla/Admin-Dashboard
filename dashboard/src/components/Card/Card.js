import { Button } from './Button'
import './card.css'
import { Search, Notification } from '../../assets/images/icons'
// import Jones from "../../assets/images/jones.png"

export const Card = () => {
  const cardInfo = [
    {
      name: 'Unresolved',
      id: '60',
    },
    {
      name: 'Overdue',
      id: '16',
    },
    {
      name: 'Open',
      id: '43',
    },
    {
      name: 'On hold',
      id: '64',
    },
  ]
  return (
    <section className="cards">
      <div className="card-box">
        <p className="card-text">Overview</p>
        <div className="card-btn-box">
          <Button className="search-btn">
            <Search />
          </Button>
          <Button className="notification-btn">
            <Notification />
          </Button>
          <p className="card-username">Jones Ferdinand</p>
        </div>
      </div>
      <ul className="card-list">
          {cardInfo.map((element) => (
            <li key={element.id} className="card-item">
                <p className="card-item-title">{element.name}</p>
                <p className="card-item-number">{element.id}</p>
            </li>
          ))}
        </ul>
    </section>
  )
}
