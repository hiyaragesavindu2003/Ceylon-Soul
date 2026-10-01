import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Explore from './pages/Explore'
import PlaceDetails from './pages/PlaceDetails'

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/place/:id" element={<PlaceDetails />} />
      </Routes>

    </BrowserRouter>
  )
}

export default App