import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import uberclone from "../assets/img/uberclone.jpg";
import portfolio from "../assets/img/portfolio.jpg";
import pokedexweb from "../assets/img/pokedexweb.jpg";
import eletrotekcell from "../assets/img/eletrotekcell2.png";
import pokemonapi from "../assets/img/pokemonapi.png";
import instaclone from "../assets/img/instaclone.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Uber Clone",
      description: "App para pedir Uber, ver a distância e tempo total e quanto você tem que pagar.",
      imgUrl: uberclone,
      link: 'https://github.com/eliasef/uber-clone'
    },
    {
      title: "Pokedéx API",
      description: "App para listar, pesquisar e ver atributos de pokémons consumindo a API oficial da pokedéx.",
      imgUrl: pokemonapi,
      link: 'https://github.com/eliasef/api-pokedex'
    },
    {
      title: "Instagram Clone",
      description: "App para listar, pesquisar e ver atributos de pokémons.",
      imgUrl: instaclone,
      link: 'https://github.com/eliasef/insta-clone'
    },
    {
      title: "Portfólio",
      description: "Meu portfólio pessoal.",
      imgUrl: portfolio,
      link: 'https://github.com/eliasef/portfolio-elias'
    },
    {
      title: "Eletrotekcell",
      description: "Um projeto de Landing Page de uma empresa chamada Eletrotekcell.",
      imgUrl: eletrotekcell,
      link: 'https://github.com/eliasef/eletrotekcell-site'
    },
    {
      title: "Pokédex Web",
      description: "Cards de Pokémons feito com Js e UI design.",
      imgUrl: pokedexweb,
      link: 'https://github.com/eliasef/api-pokedex'
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col className="container-projects" size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <p>Estes são alguns projetos realizados por mim, utilizei neles as seguintes habilidades: Javascript, HTML, CSS, Typescript, React.js, React Native, Redux, Browser Router, RTL, Jest, API REST, Axios,
Styled Components, React Navigation, Expo.</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <div className="projetos">
                          {
                            projects.map((project, index) => {
                              return (     
                                  <ProjectCard url={project.link}
                                    key={index}
                                    {...project}
                                  />
                              )
                            })
                          }
                        </div>
                      </Tab.Pane>
                      <Tab.Pane eventKey="section">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
