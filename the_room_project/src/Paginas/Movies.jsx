import BannerMovies from '../Modulos/BannerMovies'
import EnTendencia from '../Modulos/EnTendencia'
import BannerTrial from '../Modulos/BannerTrial'



function Movie(){
    return(
        <>
        <BannerMovies></BannerMovies>
        <EnTendencia></EnTendencia>
        <BannerTrial></BannerTrial>
        </>
    )
}
export default Movie