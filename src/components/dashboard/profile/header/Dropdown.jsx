import React, { useContext } from "react";
import "./Dropdown.css"
import AuthContext from "../../../../assets/data/AuthContext";

const Modal = ({ onClose }) => {
  const context = useContext(AuthContext);
  const handleLogout = () => {
    context.onLogout();
  };

  return (
    <>
      <div className="modal-container" onClick={context.onDisplayDropdown} />
      <div className="modal-content">
        <ul className="modal-list">
          <li>
            <a href="/">Revenues</a>
          </li>
          <li>
            <a href="/">Transactions</a>
          </li>
          <li>
            <a href="/">Likes</a>
          </li>
          <li>
            <a href="/">Users</a>
          </li>
        </ul>
        <button
          onClick={handleLogout}
          style={{ marginTop: "10px" }}
          className="logoutButton"
        >
          Logout
        </button>
      </div>
    </>
  );
};

export default Modal;
