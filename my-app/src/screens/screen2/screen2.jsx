import "./screen2.css";

import { Navbar } from "../../comps/nav-bar/nav-bar";
import { Sidebar } from "../../comps/side-bar/side-bar";
const Screen2 = () => {
  return (
    <div>

<Navbar />

      <div className="main-container">
        
      <Sidebar />

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

          <div className="teacher-bar">
            <div className="teacher-info">
              <div className="teacher-tag"> ⬅ </div>
              <div className="teacher-text">Teachers</div>
            </div>

            <div className="menu-icon">🖊️</div>
          </div>

          <section className="table-display">
            <div className="tab-display">
              <div className="access-tab right-tabs">
                <div className="permission tab">
                  <div className="tab-logo"></div>
                  <div className="tab-name">Access Control</div>
                </div>

                <div className="approval tab">
                  <div className="tab-name">Assiged Members</div>
                </div>
              </div>
            </div>
            <table className="table-container">
              <tr className="table head">
                <td className="table-text">Deparment/Role Name</td>
                <td className="table-text"> Access Level</td>
                <td className="table-text">No of members</td>
                <td className="table-text">Last Updated</td>
                <td className="table-text"> </td>
              </tr>

              <tr className="table row">
                <td clasName="table-cells">
                  <div className="table-role ">
                    <div className="plus-btn">+</div>
                    <p className="table-text">Enrolling Students</p>
                  </div>
                </td>
                <td clasName="table-cells">
                  {" "}
                  <div className="access-staus"> All Access </div>
                </td>
                <td clasName="table-cells">View | Edit | Create | Delete | </td>
                <td clasName="table-cells">1 min ago </td>
                <td clasName="table-cells">
                  {" "}
                  <div className="table-icon"> 👁️ </div>
                </td>
              </tr>

              <tr className="table row">
                <td clasName="table-cells">
                  <div className="table-role ">
                    <div className="plus-btn">+</div>
                    <p className="table-text">Financial Details</p>
                  </div>
                </td>
                <td clasName="table-cells">
                  <p className="noaccess access-staus"> No Access</p>
                </td>
                <td clasName="table-cells"> </td>
                <td clasName="table-cells">1 min ago </td>
                <td clasName="table-cells">
                  {" "}
                  <div className="table-icon"> 👁️ </div>
                </td>
              </tr>

              <tr className="table row">
                <td clasName="table-cells">
                  <div className="table-role ">
                    <div className="plus-btn">+</div>
                    <p className="table-text">Furniture order</p>
                  </div>
                </td>
                <td clasName="table-cells">
                  <p className="restricted access-staus"> Restricted Access</p>
                </td>
                <td clasName="table-cells">View | Create </td>
                <td clasName="table-cells">1 min ago </td>
                <td clasName="table-cells">
                  {" "}
                  <div className="table-icon"> 👁️ </div>
                </td>
              </tr>

              <tr className="table row">
                <td clasName="table-cells">
                  <div className="table-role ">
                    <div className="plus-btn">+</div>
                    <p className="table-text">Technological Equipment</p>
                  </div>
                </td>
                <td clasName="table-cells">
                  <p className="restricted access-staus"> Restricted Access</p>
                </td>

                <td clasName="table-cells">View | Create </td>
                <td clasName="table-cells">1 min ago </td>
                <td clasName="table-cells">
                  {" "}
                  <div className="table-icon"> 👁️ </div>
                </td>
              </tr>

              <tr className="table row">
                <td clasName="table-cells">
                  <div className="table-role ">
                    <div className="plus-btn">+</div>
                    <p className="table-text">Organisational Modification</p>
                  </div>
                </td>
                <td clasName="table-cells">
                  {" "}
                  <p className="access-staus"> Restricted Access</p>
                </td>
                <td clasName="table-cells">View | Edit | Create | Delete | </td>
                <td clasName="table-cells">1 min ago </td>
                <td clasName="table-cells">
                  {" "}
                  <div className="table-icon"> 👁️ </div>
                </td>
              </tr>

              <tr className="table row">
                <td clasName="table-cells">
                  <div className="table-role ">
                    <div className="plus-btn">+</div>
                    <p className="table-text">Permissions & Access Control</p>
                  </div>
                </td>
                <td clasName="table-cells">
                  {" "}
                  <p className="noaccess access-staus"> No Access</p>
                </td>
                <td clasName="table-cells"> </td>
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

export { Screen2 };
