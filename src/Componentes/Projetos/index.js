import './style.css'

const projects = [
    { title: 'Projeto 1', description: 'biblioteca de filmes feito com react', link: 'https://filmes-dev.netlify.app/' },
    { title: 'Projeto 2', description: '', link: 'file:///E:/GUSTAVO/Downloads/page.html' },
  ];

function Projetos(){
    return (
        <section className="py-20 bg-gray-100" id="projects">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-6">Projetos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white p-6 rounded shadow">
                <h3 className="text-2xl font-bold">{project.title}</h3>
                <p className="mt-2">{project.description}</p>
                <a href={project.link} className="text-blue-500 mt-4 inline-block">Ver Projeto</a>
              </div>
            ))}
          </div>
        </div>
      </section>
    )


}

export default Projetos;