import './card.styles.css'
import { Monster } from '../../App'

type CardProps = {
  monster: Monster
}

const Card = ({monster}:CardProps) => {
  
  return (
    <div className='card-container'> 
      <img src={`https://robohash.org/${monster.id}?set=set2&size=180x180`}></img>
      <h3>{ monster.name } </h3>
      <p>{ monster.email }</p>
    </div>
  )
}

export default Card;