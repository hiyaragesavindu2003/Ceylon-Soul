import { useParams } from 'react-router-dom'
const places = [
  {
    id: 1,
    name: "Mirissa Beach",
    location: "Mirissa",
    description: "A beautiful beach on the southern coast of Sri Lanka."
  },
  {
    id: 2,
    name: "Unwatuna beach",
    location: "Unawatuna",
    description: "A historic fort and popular tourist attraction."
  },
  {
    id: 3,
    name: "Nine Arch Bridge",
    location: "Ella",
    description: "A famous railway bridge surrounded by beautiful greenery."
  }
]

function PlaceDetails() {

  const { id } = useParams()
    const place = places.find(
    (place) => place.id === Number(id)
  )

  return (
     <div>
      <h1>{place.name}</h1>
      <h3>{place.location}</h3>
      <p>{place.description}</p>
    </div>
  )
}

export default PlaceDetails