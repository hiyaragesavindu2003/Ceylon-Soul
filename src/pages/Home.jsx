import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="home">
      <h1>Ceylon Soul</h1>
      <p>Discover amazing places in Sri Lanka</p>
          <Link to="/explore">
              <button>Explore Souls</button>
          </Link>
    </div>
  )
}

export default Home