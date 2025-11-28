import '../styles/About.css';
import StarSeparator from '../components/StarSeparator'; 



export default function About() {
  return (
    <div className="about-container">
      <div className="about-hero">
        <div className="about-content">
          <div className="about-text-section">
            <h1 className="about-title">
               ★ Quiénes
              <br />
              somos.
            </h1>
            <p className="about-description">
              Seirion es una plataforma que busca la transparencia que falta entre los puestos oficiales, una página hecha por ciudadanos para ciudadanos, donde cualquier persona puede documentar y verificar casos de corrupción en México.
            </p>
          </div>
          
          <div className="about-image-section">
            <img 
              src="/src/assets/stars_aboutpage.png" 
              alt="Seirion" 
              className="about-image"
            />
          </div>
        </div>
        <div className="about-decorative-bg"></div>
      </div>

      <StarSeparator />

      
      <div className="story-section">
        <div className="story-container">
  
          <div className="values-section">
            <div className="values-content">
              <div className="values-image-container">
                <img 
                  src="/src/assets/transparencia_valor.png" 
                  alt="Transparencia" 
                  className="values-image"
                />
              </div>
              
              <div className="values-text">
                <h2>Nuestros Valores</h2>
                <p>
                  En Seirion creemos que la verdad no viene con censura. Defendemos el libre albedrío al
                  documentar y compartir la realidad sin importar a quién incomode.
                </p>
                <p>
                  Cada ciudadano tiene el derecho de denunciar, verificar y preservar 
                  información sobre corrupción. Sin filtros políticos, sin secretos, 
                  sin palabrería bonita. Solo la verdad.
                </p>
              </div>
            </div>
          </div>

          <StarSeparator />
          <div className="gratitude-section">
            <div className="gratitude-box">
              <h3>Agradecimiento Especial</h3>
              <p>
                A nuestra profesora, la razón por la que siquiera este sitio existe. Muchas gracias por impulsarnos a hacer más.
              </p>
              <div className="gratitude-signature">
                - Seirion
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}