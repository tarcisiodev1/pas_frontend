import Navigation from "./Navegation";
import Footer from "./Footer";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Navigation />
      <div className="content">
        <h1 className="title">Meu Portfólio</h1>
        <div className="about-me">
          <h2>Sobre mim:</h2>
          <p>
            Me chamo Tarcísio Santos Júnior, tenho 22 anos e sou desenvolvedor
            web focado em backend, com experiência em PHP, Laravel, Codeigniter
            e MySQL. Também trabalho com Docker, PostgreSQL, HTML, CSS, SASS,
            Bootstrap e Tailwind CSS. Estou constantemente buscando aprender e
            me atualizar, atualmente estudando PHP/PHPUnit, TDD e buscando
            aprimorar minhas habilidades. Sou graduando em Análise e
            Desenvolvimento de Sistemas na UNIT/SE.
          </p>
        </div>
        <div className="projects">
          <div className="project">
            <h2>Portifólio em React</h2>
            <p>
              Portifólio de alguns projetos feitos por mim e algumas das minhas
              habilidades como desenvolvedor.
            </p>
            <p>
              <a href="http://">Link apresentação</a>
            </p>
            <a
              href="https://github.com/tarcisiodev1/api_raffle_laravel"
              target="_blank"
            >
              Ver projeto
            </a>
          </div>
          <div className="project">
            <h2>API de Sorteios para Igrejas</h2>
            <p>
              API para criar e gerenciar sorteios em igrejas em PHP/Laravel.
            </p>
            <a
              href="https://github.com/tarcisiodev1/api_raffle_laravel"
              target="_blank"
            >
              Ver projeto
            </a>
          </div>
          <div className="project">
            <h2>Appointment System CI4</h2>
            <p>Sistema de agendamento desenvolvido em Codeigniter/PHP.</p>
            <a
              href="https://github.com/tarcisiodev1/Appointment-System-Ci4"
              target="_blank"
            >
              Ver projeto
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
