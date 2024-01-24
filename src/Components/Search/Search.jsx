import './Search.css'
import { magnifyingGlass, telegram } from "../../assets/icons";

function SearchInput() {
  return(
    <div>
      <input placeholder="Buscar entre xxx videos" />
          {magnifyingGlass}

    </div>

  )
}

export default function Search () {
  const recargarPagina = () => {
    window.location.href = '/';
  };
  return(
    <section className='search'>
      <img onClick={recargarPagina} alt='logo' src='https://ricoysuave.com/wp-content/themes/videotube/img/logo-v1.png' />
    
      
      <SearchInput />


    
      <div>
        {telegram}
      </div>
      
    </section>
  )
}