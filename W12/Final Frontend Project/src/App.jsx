
import './App.css'
import MovieCard from './components/MovieCard'
import HomePage from './pages/HomePage'
import CitySelector from './components/CitySelector'
import MovieSearch from './components/MovieSearch'
import BookButton from './components/BookButton'
import GenreFilter from './components/GenreFilter'
import LoginForm from './components/LoginForm'
import SearchShortCut from './components/SearchShortcut'
import AuthStatus from './components/AuthStatus'
import MovieLoader from './components/MovieLoader'
import MoviResult from './components/MovieResult'

function App() {
 
  return (
    //   <HomePage/>
    <span>
       <CitySelector/>
       <MovieSearch/>
       <BookButton/>
       <GenreFilter/>
       <LoginForm/>
       <SearchShortCut/>
       <AuthStatus/>
       <MovieLoader/>
       <MoviResult/>
    </span>

  )
}

export default App