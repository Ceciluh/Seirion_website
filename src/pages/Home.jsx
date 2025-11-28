import MenuButton from '../components/HButton';
import FeatureCard from '../components/FeatureCard';
import StarSeparator from '../components/StarSeparator';
import Footer from '../components/Footer';
import '../styles/Home.css';

function Home() {
  return (
    <div className="home-container">
      <section className="hero-section">
        <div className="hero-background">
        </div>
        <div className="hero-overlay">
          <div className="hero-content">
            <h1 className="slogan">La verdad no viene con censura</h1>
            <p className="hero-description">
             Plataforma ciudadana para documentar, verificar y preservar casos de corrupción. Un archivo público al servicio de todos.
            </p>
            
            {/* Botones después del slogan */}
            <div className="hero-buttons">
              <MenuButton label="Ver Casos" to="/cases" />
              <MenuButton label="Explorar Corruptour" to="/visualizations" />
            </div>
          </div>
        </div>
      </section>
      <section className="features-section">
        <div className="features-container">
          
          <FeatureCard
            title="Corruptour"
            description="Mapa interactivo para una mejor visualización de la corrupción en el país."
            imageSrc="/src/assets/corruptourimage.png"
            />
            <FeatureCard
              title="Casos Verificados"
              description="Base de datos de casos documentados por ciudadanos para ciudadanos, garantizando información confiable."
              imageSrc="/src/assets/casosimage.jpg"
            />
            <FeatureCard
              title="De Ciudadanos para Ciudadanos"
              description="Una plataforma creada para la lucha contra la corrupción. Independiente y solamente para el pueblo."
              imageSrc="/src/assets/ciudadanosimage.jpg"
            />
        </div>
      </section>
      <StarSeparator />
      <section className="cta-section">
        <div className="cta-container">
          <h2 className="cta-title">¿Tienes casos que reportar?</h2>
          <div className="cta-button-wrapper">
            <MenuButton label="Ver Casos" to="/cases" />
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}

export default Home;