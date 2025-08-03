import './card.styles.css'


type CardProps = {
  id: number,
  name: string,
  email: string
}

const Card = ({name, email, id}:CardProps) => {
  
  return (
    <div className='card-container'> 
      <img src={`https://robohash.org/${id}?set=set2&size=180x180`}></img>
      <h3>{ name } </h3>
      <p>{ email }</p>
    </div>
  )
}

export default Card;