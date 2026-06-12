
import './App.css'
import MovieCard from './components/MovieCard'
import HomePage from './pages/HomePage'
import CitySelector from './components/CitySelector'
import MovieSearch from './components/MovieSearch'


function App() {
 
  return (
    //   <HomePage/>
    <span>
       <CitySelector/>
       <MovieSearch/>
    </span>

  )
}

export default App