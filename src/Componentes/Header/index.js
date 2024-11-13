import './style.css'



function Header(){
    return(
        <header className="bg-gray-800 text-white p-4 fixed w-full">
        <div className="container mx-auto flex justify-between">
          <h1 className="text-2xl font-bold">Meu Portfólio</h1>
          <nav>
            <a href="#about" className="mx-4 hover:text-blue-500">Sobre</a>
            <a href="#projects" className="mx-4 hover:text-blue-500">Projetos</a>
            <a href="#skills" className="mx-4 hover:text-blue-500">Habilidades</a>
            <a href="#contact" className="mx-4 hover:text-blue-500">Contato</a>
          </nav>
        </div>
      </header>
    )
}

export default Header;