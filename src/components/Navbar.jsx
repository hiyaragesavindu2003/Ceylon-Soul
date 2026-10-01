import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <nav>
      <h2>Ceylon Explorer</h2>

       <Link to="/">Home</Link>
      <Link to="/explore">Explore</Link>
      <Link to="/about">About</Link>
    </nav>
  )
}

export default Navbar