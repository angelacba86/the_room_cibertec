import './Footer.css'

function Footer() {
    return (
        <footer>
            <div className="container">
                <nav className="f-top">
                    <div className="menu-link">
                        <ul className="link">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Movies</a></li>
                            <li><a href="#">Shows</a></li>
                            <li><a href="#">Suscripcion</a></li>
                        </ul>
                    </div>

                    <div className="social-wrap">
                        <h3>Connect With Us</h3>
                        <div className="social">
                            <a href="https://facebook.com"><img src="/Facebook.png" alt="Facebook" /></a>
                            <a href="https://twitter.com"><img src="/Twitter.png" alt="Twitter" /></a>
                            <a href="https://linkedin.com"><img src="/Linkedln.png" alt="Linkedln" /></a>
                        </div>
                    </div>
                </nav>

                <div className="f-bottom">
                    <h3>© 2025 streamvib, All Rights Reserved</h3>
                    <div className="politicas">
                        <a href="#">Terms of Use</a>
                        <a href="#">Privacy Policy</a>
                        <a href="#">Cookkie Policy</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default Footer