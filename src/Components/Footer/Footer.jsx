import './Footer.css'
export default function Footer ( { array } ) {
  return(
    <footer>
      <div>
        <p>
        ¡Este sitio contiene material para adultos sexualmente explícito y es solo para adultos! Al ingresar a este sitio, <a>usted certifica que tiene 18 años o más</a> y, si es necesario en la localidad donde ve este sitio, 21 años o más, que ha venido voluntariamente a este sitio para ver material sexualmente explícito.
        </p>
        <p>
        Publicamos vídeos porno nuevos todos los días, ofreciendo una amplia selección de contenido en alta definición. Contamos con una extensa colección de categorías xxx disponibles de forma gratuita para ver en línea sin restricciones.
        </p>
        <p>
        Para reclamo de derechos de autor, DMCA o videos ofensivos, escríbanos a: <a href='#'>admin@ricoysuave.com</a>
        </p>
      </div>
      <div>
        {
          array.map((x,i) => <a key={i}>{x.description}</a>)
        }
      </div>
        
      
    </footer>
  )
}