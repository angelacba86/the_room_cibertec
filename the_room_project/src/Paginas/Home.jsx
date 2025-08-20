import Banner from "../Modulos/Banner"
import "./Home.css"
import PreguntasHome from "../Modulos/PreguntasHome"
import PlanesHome from "../Modulos/PlanesHome"
import BannerTrial from "../Modulos/BannerTrial"
import TarjetasHome from "../Modulos/TarjetasHome"
function Home(){
    return(
        <>
        <Banner></Banner>
        <main>
        <TarjetasHome></TarjetasHome>
        <PreguntasHome></PreguntasHome>
        <PlanesHome></PlanesHome>
        <BannerTrial></BannerTrial>
        </main>        
        </>
    )
}
export default Home