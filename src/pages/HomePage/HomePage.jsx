import MoviesSearch from '../../modules/MoviesSearch/MoviesSearch'
import css from "./HomePage.module.css"

const HomePage = () => {
    
    return (<>
        <h2 className={css.title}>Trending today</h2>
        <MoviesSearch />
    </>
    )
}

export default HomePage;