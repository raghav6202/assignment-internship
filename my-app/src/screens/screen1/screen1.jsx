import "./screen1.css"
;

const Screen1 = () => {
  return (
    <div>
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
      <div className="main-container">
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

        <main className="main-display">
          <div className="tab-display">
            <div className="right-tabs">
              <div className="permission tab">
                <div className="tab-logo">🔥</div>
                <div className="tab-name">Permissions</div>
              </div>

              <div className="approval tab">
                <div className="tab-logo">🫥</div>
                <div className="tab-name">Approval Matrix</div>
              </div>
            </div>

            <div className="left-tabs">
              <div className="tab">
                <div className="last-sync-logo"> 🌀</div>
                <div className="last-sync-text">Last sync 15min ago </div>
              </div>
            </div>
          </div>

          <div className="role-display">
            <div className="role-elements">
              <button className="role-btn"> + Add Role</button>

              <div className="role-icon">✏️</div>
              <div className="role-icon">🗑️</div>
            </div>
          </div>

          <section className="table-display">
            <table className="table-container">
              <tr className="table head">
                <td className="table-text">Deparment/Role Name</td>
                <td className="table-text"> Access Level</td>
                <td className="table-text">No of members</td>
                <td className="table-text">Last Updated</td>
              </tr>

              <tr className="table row">
                <td clasName="table-cells">
                  <div className="table-role ">
                    <input type="radio" className="table-btn" />
                    <p className="table-text">Teachers</p>
                  </div>
                </td>
                <td clasName="table-cells">
                  {" "}
                  <div className="access-staus"> All Access </div>
                </td>
                <td clasName="table-cells">4</td>
                <td clasName="table-cells">1 min ago </td>
                <td clasName="table-cells">
                  {" "}
                  <div className="table-icon"> 👁️ </div>
                </td>
              </tr>

              <tr className="table row">
                <td clasName="table-cells">
                  <div className="table-role ">
                    <input type="radio" className="table-btn" />
                    <p className="table-text">External Faculty</p>
                  </div>
                </td>
                <td clasName="table-cells">
                  <p className="restricted access-staus"> Restricted Access</p>
                </td>
                <td clasName="table-cells">8</td>
                <td clasName="table-cells">1 min ago </td>
                <td clasName="table-cells">
                  {" "}
                  <div className="table-icon"> 👁️ </div>
                </td>
              </tr>

              <tr className="table row">
                <td clasName="table-cells">
                  <div className="table-role ">
                    <input type="radio" className="table-btn" />
                    <p className="table-text">Lab Assistants</p>
                  </div>
                </td>
                <td clasName="table-cells">
                  <p className="restricted access-staus"> Restricted Access</p>
                </td>
                <td clasName="table-cells">16</td>
                <td clasName="table-cells">1 min ago </td>
                <td clasName="table-cells">
                  {" "}
                  <div className="table-icon"> 👁️ </div>
                </td>
              </tr>

              <tr className="table row">
                <td clasName="table-cells">
                  <div className="table-role ">
                    <input type="radio" className="table-btn" />
                    <p className="table-text">Non Teaching Staff</p>
                  </div>
                </td>
                <td clasName="table-cells">
                  <p className="restricted access-staus"> Restricted Access</p>
                </td>

                <td clasName="table-cells">4</td>
                <td clasName="table-cells">1 min ago </td>
                <td clasName="table-cells">
                  {" "}
                  <div className="table-icon"> 👁️ </div>
                </td>
              </tr>

              <tr className="table row">
                <td clasName="table-cells">
                  <div className="table-role ">
                    <input type="radio" className="table-btn" />
                    <p className="table-text">Supervisors</p>
                  </div>
                </td>
                <td clasName="table-cells">
                  {" "}
                  <p className="access-staus"> Restricted Access</p>
                </td>
                <td clasName="table-cells">1</td>
                <td clasName="table-cells">1 min ago </td>
                <td clasName="table-cells">
                  {" "}
                  <div className="table-icon"> 👁️ </div>
                </td>
              </tr>
            </table>
          </section>
        </main>
      </div>
    </div>
  );
};

export { Screen1 };


