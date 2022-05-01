
import "./side-bar.css"

const Sidebar = () =>
{

    return(
        <aside className="side-bar">
        <div className="menu">
          <div className="menu-icon"> 🚧 </div>

          <div className="menu-text"> Projects</div>
        </div>

        <div className="menu">
          <div className="menu-icon"> 💼 </div>

          <div className="menu-text"> Classrooms</div>
        </div>

        <div className="red menu ">
          <div className="red-selector"> </div>
          <div className="red menu-icon"> 🛡️ </div>

          <div className="red menu-text"> Permissions</div>
        </div>
      </aside>
    )
}


export {Sidebar}