import Banner from "../Modulos/Banner"
import Footer from "../Modulos/Footer"
import PreguntasHome from "../Modulos/PreguntasHome"
import PlanesHome from "../Modulos/PlanesHome"
import BannerTrial from "../Modulos/BannerTrial"
function Home(){
    return(
        <>
        <Banner></Banner>
        <main>
            <PreguntasHome></PreguntasHome>
            <PlanesHome></PlanesHome>
            <BannerTrial></BannerTrial>
        </main>
        <Footer></Footer>
        </>
    )
}
export default Home