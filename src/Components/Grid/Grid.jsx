import { NavLink } from 'react-router-dom'
import './Grid.css'
export default function Grid ( { array } ) {
  return(
    <section className='grid'>
      <div>
        
          {
            array.map((x,i) => <div key={i}>
              <NavLink to={`/video/${x.title.toLowerCase().split(' ').join('-')}`}>
                <img src={x.img} />
                <div></div>
              </NavLink>
              <NavLink to={`/video/${x.title.toLowerCase().split(' ').join('-')}`}>{x.title}</NavLink>

            </div>)
          }
        
      </div>
    </section>
  )
}