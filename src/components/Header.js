import { ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function Header() {
  
  return (
    <nav className="navbar navbar-expand-lg navbar-dark  fixed-top navtrh" style={{ background: 'linear-gradient(-60deg, #074b79,#0c2238)', color:"white" }}
    >
      <div className="container-fluid navihead">
        <a className="navbar-brand" href="/">
          <img src={process.env.PUBLIC_URL + "/images/logo (1).png"} alt="metrogirlshostel" />
        
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i class="bi bi-list"></i>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
           
          <li className="nav-item">
              <a className="nav-link onhoverr" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link onhoverr" href="#services">
                Services
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link onhoverr" href="#about">
                About Us
              </a>
            </li>

                      <li className="nav-item">
              <a className="nav-link onhoverr" href="#Gallary">
                Gallery
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link onhoverr" href="#contectus">
                Contact Us
              </a>
            </li>
          
          </ul>
        
        </div>
      </div>
    </nav>
  );
}

export default Header;
