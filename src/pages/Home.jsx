import MenuButton from '../components/HButton';
import FeatureCard from '../components/FeatureCard';
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

      {/* Features Section */}
      <section className="features-section">
        <div className="features-container">
          
          <FeatureCard
            title="Corruptour"
            description="Mapa interactivo que visualiza geográficamente los lugares donde ocurrieron casos documentados de corrupción en México."
            imageSrc="/src/assets/corruptourimage.png"
          />

          <FeatureCard
            title="Casos Verificados"
            description="Base de datos de casos documentados y verificados por ciudadanos para ciudadanos, garantizando información confiable."
            imageSrc="/src/assets/casosimage.jpg"
          />

          <FeatureCard
            title="De Ciudadanos para Ciudadanos"
            description="Plataforma colaborativa tipo Wikipedia dedicada exclusivamente a documentar la corrupción en México."
            imageSrc="/src/assets/ciudadanosimage.jpg"
          />

        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© Seirion 2025</p>
      </footer>
    </div>
  );
}

export default Home;