import Card from '../card/card.component.js'
import './card-list.styles.css'
import { Monster } from '../../App.js'

type CardListProps = {
    monsters: Monster[]
}

const CardList = ({ monsters }:CardListProps) => {
    return (
        <div className='card-list-container'>
        {
            monsters.map(({ name, email, id }, idx) => {
            return <Card key={`${name}-${idx}`} name={name} email={email} id={id}></Card>; 
          })
        }
        </div>
    )
}

export default CardList;