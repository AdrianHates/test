import { useLocation, Link } from "react-router-dom";
import './NoMatch.css'

export default function NoMatch() {
  let location = useLocation();
  return (
    <section id='no-match'>
      <div>
      <h2>¡Oh no! El video se ha ido por una reclamación DCMA.</h2>
      <p>Pero tenemos muchos más videos increíbles en nuestro sitio web. ¡Echen un vistazo y disfruten! Gracias por su comprensión.</p>
      <Link to='/'>Home</Link>
      </div>
    </section>
      
  );
}