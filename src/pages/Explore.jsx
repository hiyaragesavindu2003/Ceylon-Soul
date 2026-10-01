import { useState } from 'react'
import PlaceCard from '../components/PlaceCard'
import mirissaImg from '../assets/mirissa.jpg'
import galleImg from '../assets/Unwatuna.jpg'
import ellaImg from '../assets/Ella.jpg'
function Explore() {

  const places = [
    { id: 1, name: "Mirissa Beach", location: "Mirissa",image:mirissaImg},
    { id: 2, name: "Unawatuna Beach", location: "Unawatuna",image: galleImg},
    { id: 3, name: "Nine Arch Bridge", location: "Ella" , image:ellaImg}
  ]

  const [search, setSearch] = useState("")

  const filteredPlaces = places.filter((place) =>
    place.name.toLowerCase().includes(search.toLowerCase()) ||
    place.location.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div>

      <h1>Explore Sri Lanka</h1>

      <input
        type="text"
        placeholder="Search places..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="places">
        {filteredPlaces.map((place) => (
          <PlaceCard
            key={place.id}
            id={place.id}
            name={place.name}
            location={place.location}
             image={place.image}
          />
        ))}
      </div>

    </div>
  )
}

export default Explore