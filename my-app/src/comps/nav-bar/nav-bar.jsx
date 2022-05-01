
import "./nav-bar.css"

const Navbar = () =>

{


    return(
        <nav className="nav-bar">
        <div className="side-bar-heading">
          <div className="side-bar-circle"> </div>
          <div className="side-bar-text">Classroom Manager </div>
        </div>

        <div className="left-nav-items">
          <div className="oval prfile "> </div>
          <div className="prfile name"> Kishore </div>
          <div className="profile bell"> 🔔 </div>
          <div className="profile question"> ❓</div>
        </div>
      </nav>
    )
}


export {Navbar}