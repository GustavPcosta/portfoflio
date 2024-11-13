import './style.css'
import Primer from '../../assts/Primer.jpg'
import linkedlin from '../../assts/linkedlin.jpg'

function Contacts(){
    return(
        <section className="py-20 bg-gray-100" id="contact">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-6">Redes Sociais</h2>
          <div className='image-contact'>
            <a href=' https://github.com/GustavPcosta'><img className='img-linkedlin' src={Primer}/></a>
            <a href='https://www.linkedin.com/in/gustavo-costa-9a1318225/'><img src={linkedlin}/></a>
          </div>
        </div>
      </section>
    )
}


export default Contacts;