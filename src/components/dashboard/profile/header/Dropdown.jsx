import React, { useContext } from "react";
import "./Dropdown.css";
import AuthContext from "../../../../assets/data/AuthContext";

const Modal = () => {
  const context = useContext(AuthContext);
  const handleLogout = () => {
    context.onLogout();
  };

  return (
    <>
      <div className="modal-container" onClick={context.onDisplayDropdown} />
      <div className="modal-content">
        <ul className="modal-list">
          <li style={{fontWeight: 700}}>Hi {localStorage.getItem("name")}!</li>
          <li>
            <a href="/">Profile</a>
          </li>
          <li>
            <a href="/">Notification</a>
          </li>
          <li>
            <a href="/">Settings</a>
          </li>
          <li>
            <a href="/">Switch account</a>
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
