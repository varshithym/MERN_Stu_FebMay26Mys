import NavBar from "../components/NavBar"
import HeroBanner from "../components/HeroBanner"
import Footer from "../components/Footer"
import MovieCard from "../components/MovieCard"

export default function HomePage(){
    return(
        <>
            <NavBar/>
            <HeroBanner/>
            <section>
                <h2>Recomended Movies</h2>
                <MovieCard/>
                <MovieCard/>
                <MovieCard/>
            </section>
           
            <Footer/>
        </>
    )
}