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
            monsters.map((monster, idx) => {
            return <Card key={`${monster.name}-${idx}`} monster={monster}></Card>; 
          })
        }
        </div>
    )
}

export default CardList;