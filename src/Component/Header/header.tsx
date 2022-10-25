import { useState} from 'react';
import NavBar from './navBar';
import "./header.scss";
import ModalHeader from "./navBarMobile";

function Header() {

  const [openMenu,setOpenMenu]=useState(false);

  return (
    <div>
     { openMenu && <ModalHeader closeMenu={setOpenMenu} />}
      <div className="container">
        <header id="header">
          <div className="menu-item" onClick={()=> setOpenMenu(true)}>
          <svg className="btn_menu" width="50" height="30" viewBox="0 0 50 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 2.39726C0 1.07329 1.07329 0 2.39726 0H47.6027C48.9267 0 50 1.07329 50 2.39726V2.39726C50 3.72123 48.9267 4.79452 47.6027 4.79452H2.39726C1.07329 4.79452 0 3.72123 0 2.39726V2.39726Z" fill="white"/>
            <path d="M0 13.3562C0 12.0322 1.07329 10.9589 2.39726 10.9589H47.6027C48.9267 10.9589 50 12.0322 50 13.3562V13.3562C50 14.6801 48.9267 15.7534 47.6027 15.7534H2.39726C1.07329 15.7534 0 14.6801 0 13.3562V13.3562Z" fill="white"/>
            <path d="M0 25C0 23.676 1.07329 22.6027 2.39726 22.6027H47.6027C48.9267 22.6027 50 23.676 50 25V25C50 26.324 48.9267 27.3973 47.6027 27.3973H2.39726C1.07329 27.3973 0 26.324 0 25V25Z" fill="white"/>
          </svg>
          </div>
          <img src={require("../../assets/images/logo/logo.png")} alt="" className="logo" />
          <NavBar/>
        </header>
      </div>
    </div>
  );
}

export default Header;
