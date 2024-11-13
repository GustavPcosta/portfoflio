import './style.css'



function Heroes(){
    return( 
    <section className="bg-gray-900 text-white h-screen flex items-center justify-center" id="hero">
      <div className="text-center">
        <h2 className="text-4xl font-bold">Olá, sou [Gustavo Costa]</h2>
        <p className="mt-4 text-xl">Desenvolvedor FUllSTACK apaixonado por criar experiências incríveis na web.</p>
        <button className="mt-6 bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded text-white">
          < a className="link-heroes"href='https://github.com/GustavPcosta'>Veja meu trabalho</a>
        </button>
      </div>
    </section>    
    )
}

export default Heroes;