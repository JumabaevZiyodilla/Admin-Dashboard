import { Button } from './Button'
import "./card.css"
import { Search } from '../../assets/images/icons'

export const Card = () => {
  return (
    <section className="card">
        <div className="card-box">
          <p className='card-text'>Overview</p>
          <Button classname="search-btn"><Search/></Button>
          <Button classname="notification-btn" />
        </div>
    </section>
  )
}
