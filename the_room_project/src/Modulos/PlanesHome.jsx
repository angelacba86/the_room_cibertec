import "./PlanesHome.css";

function PlanesHome() {
    return (
        <div className="contenedor-titulos">
            <div className="titulo">
                <h2>Choose the plan that's right for you</h2>
                <p>
                    Join StreamVibe and select from our flexible subscription options
                    tailored to suit your viewing preferences. Get ready for non-stop
                    entertainment!
                </p>
            </div>
            <div className="planes">
                <div className="plan">
                    <div className="detallePlan">
                        <h3>Basic Plan</h3>
                        <p>
                            Enjoy an extensive library of movies and shows, featuring a range
                            of content, including recently released titles.
                        </p>
                    </div>
                    <div className="precio">
                        <h2>$9.99</h2>
                        <p>
                            /month
                        </p>
                    </div>
                    <div className="botons">
                        <a href="#" id="BotonNegro">Start Free Trial</a>
                        <a href="#">Choose Plan</a>
                    </div>
                </div>
                <div className="plan">
                    <div className="detallePlan">
                        <h3>Standar Plan</h3>
                        <p>
                            Access to a wider selection of movies and shows, including most
                            new releases and exclusive content
                        </p>
                    </div>
                    <div className="precio">
                        <h2>$12.99</h2>
                        <p>
                            /month
                        </p>
                    </div>
                    <div className="botons">
                        <a href="#" id="BotonNegro">Start Free Trial</a>
                        <a href="#">Choose Plan</a>
                    </div>
                </div>
                <div className="plan">
                    <div className="detallePlan">
                        <h3>Premium Plan</h3>
                        <p>
                            Access to a widest selection of movies and shows, including all
                            new releases and Offline Viewing
                        </p>
                    </div>
                    <div className="precio">
                        <h2>$14.99 </h2>
                        <p>
                            /month
                        </p>
                    </div>
                    <div className="botons">
                        <a href="#" id="BotonNegro">Start Free Trial</a>
                        <a href="#">Choose Plan</a>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default PlanesHome;
