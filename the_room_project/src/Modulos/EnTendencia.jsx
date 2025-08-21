import"./EnTendencia.css"
import { GoArrowLeft } from "react-icons/go";
import { GoArrowRight } from "react-icons/go";
import { LuClock3 } from "react-icons/lu";
import { LuEye } from "react-icons/lu";
function EnTendencia (){
    return(
        <>
        <div className="contenedor1">                       {/*Contenedor principal*/}    
            <div className="EnTendencia">                   {/*contenedor tendencia*/}
                <div className="titulo-flechas">            {/*contenedor titulo y fleca*/}    
                    <h3>
                        En Tendencia
                    </h3>

                    <div className="flechas">
                        <GoArrowLeft className="icono-flecha" />
                        <div className="botones">
                            <button></button>
                            <button></button>
                            <button></button>
                        </div>
                        <GoArrowRight className="icono-flecha" />


                    </div>
                </div>

                <div className="contenedor-card">                       {/*contenedor de card´s*/}
                    <div className="card1">                             {/*card´s 1*/}
                        <a href="#"><img src="/cards/card1.png" alt="car1" /></a>
                        <div className="duracion">                {/*duracon y view´s*/}
                            <div className="tiempo">
                        <LuClock3 size={24} color="#555" /> 
                        <p>1h 30min</p>
                            </div>
                            <div className="vista">
                        <LuEye size={24} color="#555" />
                        <p> 2k</p>
                            </div>
                        </div>  
                    </div>
                    
                    <div className="card1">                       {/*card´s 2*/}
                        <a href="#"><img src="/cards/card2.png" alt="car1" /></a>
                        <div className="duracion">                {/*duracon y view´s*/}
                            <div className="tiempo">
                        <LuClock3 size={24} color="#555" /> 
                        <p>1h 57min</p>
                            </div>
                            <div className="vista">
                        <LuEye size={24} color="#555" />
                        <p> 1.5k</p>
                            </div>
                        </div>  
                    </div>

                    <div className="card1">                          {/*card´s 3*/}
                        <a href="#"><img src="/cards/card3.png" alt="car1" /></a>
                        <div className="duracion">                {/*duracon y view´s*/}
                            <div className="tiempo">
                        <LuClock3 size={24} color="#555" /> 
                        <p>2h 10min</p>
                            </div>
                            <div className="vista">
                        <LuEye size={24} color="#555" />
                        <p> 1.8k</p>
                            </div>
                        </div>  
                    </div>

                    <div className="card1">                             {/*card´s 4*/}
                        <a href="#"><img src="/cards/card4.png" alt="car1" /></a>
                        <div className="duracion">                {/*duracon y view´s*/}
                            <div className="tiempo">
                        <LuClock3 size={24} color="#555" /> 
                        <p>1h 15min</p>
                            </div>
                            <div className="vista">
                        <LuEye size={24} color="#555" />
                        <p> 1.4k</p>
                            </div>
                        </div>  
                    </div>


                    <div className="card1">                          {/*card´s 5*/}
                        <a href="#"><img src="/cards/card5.png" alt="car1" /></a>
                        <div className="duracion">                {/*duracon y view´s*/}
                            <div className="tiempo">
                        <LuClock3 size={24} color="#555" /> 
                        <p>2h 10min</p>
                            </div>
                            <div className="vista">
                        <LuEye size={24} color="#555" />
                        <p> 7k</p>
                            </div>
                        </div>  
                    </div>

                </div>
            </div>
        </div>

        </>
    )

}
export default EnTendencia