import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="home">
      <h1>Ceylon Explorer</h1>
      <p>Discover amazing places in Sri Lanka</p>
          <Link to="/explore">
              <button>Explore Places</button>
          </Link>
    </div>
  )
}

export default Home