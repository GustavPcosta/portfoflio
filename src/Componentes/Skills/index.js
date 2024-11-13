import './style.css'


function Skills(){
    return(
    <section className="py-20 bg-gray-100" id="skills">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-6">Habilidades</h2>
        <ul className="flex flex-wrap justify-center">
          <li className="mx-4 my-2 px-4 py-2 bg-gray-200 rounded">HTML</li>
          <li className="mx-4 my-2 px-4 py-2 bg-gray-200 rounded">CSS</li>
          <li className="mx-4 my-2 px-4 py-2 bg-gray-200 rounded">JavaScript</li>
          <li className="mx-4 my-2 px-4 py-2 bg-gray-200 rounded">React</li>
          <li className="mx-4 my-2 px-4 py-2 bg-gray-200 rounded">Spring</li>
          <li className="mx-4 my-2 px-4 py-2 bg-gray-200 rounded">Git</li>
          <li className="mx-4 my-2 px-4 py-2 bg-gray-200 rounded">Nodejs</li>
          <li className="mx-4 my-2 px-4 py-2 bg-gray-200 rounded">Nextjs</li>
        </ul>
      </div>
    </section>
    )
}

export default Skills;