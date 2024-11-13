
import './style.css';

import Contacts from '../Componentes/Contato';
import Header from '../Componentes/Header';
import Heroes from '../Componentes/Heros';
import About from '../Componentes/Sobre';

import Projetos from '../Componentes/Projetos';
import Skills from '../Componentes/Skills';

function Portfolio() {
  return (
    <>
    <Header/>
    <Heroes/>
    <About/>
    <Projetos/>
    <Skills/>
    <Contacts/>
  
    </>
    
  );
}

export default Portfolio;
