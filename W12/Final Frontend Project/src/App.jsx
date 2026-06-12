
import './App.css'
import MovieCard from './components/MovieCard'
import HomePage from './pages/HomePage'


function App() {
 
  return (
    //   <HomePage/>
    <span>
        <MovieCard
            title="inception"
            genre="fiction"
            rating={4.8}
            duration="2h 28m"
            poster="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRyuWmayVBvqjd1MxTKpRgauq2cCtUzb7Q9QvaFTkAuxAU_EYMoCE3wBuJeftxIzf0grreIw&s=10"
        
        />
         <MovieCard
            title="obsession"
            genre="love"
            rating={4.8}
            duration="2h 28m"
            poster="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTZZmWEhdF2pbwYfOjKBCXSCKXhUQ88EW2NBxSrUfXfBWRchrBN"
        
        />
         <MovieCard
            title="intesteller"
            genre="fiction"
            rating={4.8}
            duration="2h 28m"
            poster="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGW7C6dkLMzUE-wYDb0t-Ze6UkSQlRzbkHdFbeuqJDeXCglJqSHLx52z2--O6a-gipTe5aIg&s=10"
        
        />
    </span>

  )
}

export default App