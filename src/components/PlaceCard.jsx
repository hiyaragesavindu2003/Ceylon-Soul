import { Link } from 'react-router-dom'
function PlaceCard(props) {
  return (
    <div className="place-card">
      <img
        src={props.image}
        alt={props.name}
      />

      <h3>{props.name}</h3>
      <p>{props.location}</p>

      <Link to={`/place/${props.id}`}>
        <button>View Details</button>
      </Link>

    </div>

    
  )
}

export default PlaceCard