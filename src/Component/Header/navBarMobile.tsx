import "./navBarMobile.scss";

function modalHeader({ closeMenu }: any) {
  function closeNavMenu() {
    closeMenu(false);
  }
  return (
    <div className="menu_contain">
      <div className="menu">
        <img src={require("../../assets/images/logo/logo.png")} alt="" className="menu_logo" />
        <p className="menu_close" onClick={closeNavMenu}>
          X
        </p>
        <ul className="menu_nav">
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
