import React from "react";
import "./_navmenu.scss";

function modalHeader({ closeMenu }: any) {
  function closeNavMenu() {
    closeMenu(false);
  }
  return (
    <div className="menu-contain">
      <div className="menu">
        <img src="./logo.png" alt="" className="logo-menu" />
        <p className="close-menu" onClick={closeNavMenu}>
          X
        </p>
        <ul className="nav-menu">
          <li  onClick={closeNavMenu}>
            <a href="#" >
              Trang chủ
            </a>
          </li>
          <li onClick={closeNavMenu}>
            <a href="#ranking" >
              Xếp hạng
            </a>
          </li>
          <li  onClick={closeNavMenu} >
            <a href="#record" >
              Chỉ số
            </a>
          </li>
          <li  onClick={closeNavMenu}>
            <a href="#star" >
              Ngôi sao
            </a>
          </li>
          <li  onClick={closeNavMenu}>
            <a href="#other" >
              Khác
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default modalHeader;
