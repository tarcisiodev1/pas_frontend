import Navigation from "./Navegation";
import Footer from "./Footer";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Navigation />
      <div className="content">
        <h1>Meu Portfólio</h1>
        <div className="about-me">
          <h2>Sobre mim:</h2>
          <p>Adicione aqui uma breve descrição sobre você.</p>
        </div>
        <div className="projects">
          <div className="project">
            <h2>Projeto 1</h2>
            <p>Descrição do Projeto 1</p>
            <a href="#">Ver projeto</a>
          </div>
          <div className="project">
            <h2>Projeto 2</h2>
            <p>Descrição do Projeto 2</p>
            <a href="#">Ver projeto</a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
