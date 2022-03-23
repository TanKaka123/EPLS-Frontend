import React,{ useState} from 'react';
import "./_header.scss";
import "./_navigation.scss";
import "./_navmenu.scss";
import ModalHeader from "./modalHeader";

function Header() {
  

  const [openMenu,setOpenMenu]=useState(false);
  function openNavMenu(){
    setOpenMenu(true)
  }
  return (
    <div>
     { openMenu && <ModalHeader closeMenu={setOpenMenu} />}
      <div className="container">
        <header id="header">
          <div className="menu-item" onClick={openNavMenu}>
            <svg
              width="50"
              height="28"
              viewBox="0 0 50 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 0H50V4.79452H0V0Z" fill="white" />
              <path d="M0 10.9589H50V15.7534H0V10.9589Z" fill="white" />
              <path d="M0 22.6027H50V27.3973H0V22.6027Z" fill="white" />
            </svg>
          </div>
          <img src="./logo.png" alt="" className="logo" />
          <nav className="navbar">
            <ul>
              <li>
                <a href="#">Trang chủ</a>
              </li>
              <li>
                <a href="#ranking">Xếp hạng</a>
              </li>
              <li>
                <a href="#record">Chỉ số</a>
              </li>
              <li>
                <a href="#star">Ngôi sao</a>
              </li>
              <li>
                <a href="#other">Khác</a>
              </li>
            </ul>
          </nav>
          <div className="modeColor">OBJECT</div>
        </header>
      </div>
        
    </div>
  );
}

export default Header;
