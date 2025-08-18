import './Header.css'
function Header(){
    return(
        <>
        <header>
            <img src="./logo.png" alt="The Room" />
            <nav>
                <ul>
                    <a href="#" className='active'><li>Inicio</li></a>
                    <a href="#"><li>Películas y Series</li></a>
                    <a href="#"><li>Soporte</li></a>
                </ul>
            </nav>
            <div className="usuario">
                <a href="#"><img src="./icon-nav.svg" alt="buscar" /></a>
                <a href="#"><img src="./icon-nav2.svg" alt="novedades" /></a>
                <a href="#"><img src="./icon-nav3.svg" alt="usuario" /></a>
            </div>
        </header>
        </>
    )
}
export default Header