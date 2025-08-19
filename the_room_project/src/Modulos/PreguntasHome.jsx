import "./PreguntasHome.css";
import { useState } from "react";
function PreguntasHome() {
  const preguntas = [
    {
      nro: "01",
      titulo: "¿Que es StreamVibe?",
      texto:
        "StreamVibe es una plataforma de streaming que te permite ver películas, series y documentales en cualquier momento y lugar.",
    },
    {
      nro: "02",
      titulo: "¿Cuanto cuesta StreamVibe ?",
      texto:
        "StreamVibe ofrece planes de suscripción mensuales a precios accesibles. El costo puede variar según el plan que elijas.",
    },
    {
      nro: "03",
      titulo: "¿Que contenido esta disponible en StreamVibe?",
      texto:
        "En StreamVibe encontrarás una amplia variedad de películas, series, documentales y producciones exclusivas, tanto nacionales como internacionales.",
    },
    {
      nro: "04",
      titulo: "¿Cómo puedo ver StreamVibe?",
      texto:
        "Puedes acceder a StreamVibe desde cualquier dispositivo con conexión a internet, ya sea computadora, tablet, smartphone o smart TV.",
    },
    {
      nro: "05",
      titulo: "¿Cómo me inscribo a StreamVibe?",
      texto:
        "Solo necesitas crear una cuenta en nuestra página web o aplicación, elegir un plan de suscripción y completar el registro.",
    },
    {
      nro: "06",
      titulo: "¿Cómo funciona el servicio de prueba gratuito de StreamVibe?",
      texto:
        "StreamVibe ofrece un periodo de prueba gratuito de 07 días durante el cual puedes acceder a todo el catálogo sin costo. Al finalizar, podrás decidir si deseas continuar con una suscripción de pago.",
    },
    {
      nro: "07",
      titulo:
        "¿Como me contacto con el servicio de soporte al cliente de StreamVibe?",
      texto:
        "Puedes comunicarte con nuestro equipo de soporte a través del chat en línea, correo electrónico o la sección de ayuda en la aplicación.",
    },
    {
      nro: "08",
      titulo: "¿Cuales son los métodos de pago de StreamVibe?",
      texto:
        "Aceptamos diversos métodos de pago, incluyendo tarjetas de crédito y débito, billeteras digitales y pagos en línea según tu país.",
    },
  ];
  const [preguntaAbierta, setPreguntaAbierta] = useState(null);

  const switchPregunta = (index) => {
    setPreguntaAbierta(preguntaAbierta === index ? null : index);
  };

  return (
    <>
      <div className="contenedor">
        <h2>Frequently Asked Questions</h2>
        <p className="parrafo-principal">
          Got questions? We've got answers! Check out our FAQ section to find
          answers to the most common questions about StreamVibe.
        </p>

        <div className="preguntas-contenedor">
          {preguntas.map((pregunta, index) => (
            <div className="pregunta" key={index}>
              <div>
                <h3 className="nro-pregunta" >
                  {pregunta.nro}
                </h3>
                <div className="textos-pregunta">
                  <h4>{pregunta.titulo}</h4>
                  <div
                    className={`respuesta ${
                      preguntaAbierta === index ? "abierto" : ""
                    }`}
                  >
                    <p>{pregunta.texto}</p>
                  </div>
                </div>

                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    switchPregunta(index);
                  }}
                >
                  {preguntaAbierta === index ? "−" : "+"}
                </a>
              </div>
              <div className="linea-degradado"></div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
export default PreguntasHome;
