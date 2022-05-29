import "./navBar.scss";


function navBar() {
    return (
        <div>
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
        </div>
    );
}

export default navBar;