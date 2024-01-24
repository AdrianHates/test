import './Navbar.css'
export default function Navbar ( { array } ) {
  return(
    <nav>
      
        {
          array && array.map((x,i) => <div key={i}>
            {x}
          </div>)
        }
      
    </nav>
  )
}