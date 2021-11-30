import "./nav.scss";

function Nav(params) {
  return (
    <div>
      <nav class="navbar navbar-expand-md navbar-light">
        <div class="container-md border-bottom">
          <a class="navbar-brand ms-md-5 webdesign" href="#">
            Web Designing <span class="nav--animate__tamil">{"{ தமிழ் }"}</span>
          </a>
          <button
            class="navbar-toggler bg-light m-1 me-2"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav  ms-md-auto pe-md-5 me-md-5 mt-md-2 navul">
              <li class="nav-item me-md-1 pe-md-1">
                <a class="nav-link fs" aria-current="page" href="#">
                  HOME
                </a>
              </li>
              <li class="nav-item me-md-1 ms-md-1">
                <a class="nav-link fs" href="#">
                  ABOUT
                </a>
              </li>
              <li class="nav-item me-md-1 ms-md-1">
                <a class="nav-link fs" href="#">
                  ROADMAP
                </a>
              </li>
              <li class="nav-item dropdown me-md-1 ms-md-1">
                <a
                  class="nav-link dropdown-toggle fs"
                  href="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  FORMS
                </a>
                <ul
                  class="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li>
                    <a class="dropdown-item form-li" href="#">
                      Rigister
                    </a>
                  </li>
                  <li></li>
                  <li>
                    <a class="dropdown-item form-li" href="#">
                      Login
                    </a>
                  </li>
                  <li></li>
                  <li>
                    <a class="dropdown-item form-li" href="#">
                      Logout
                    </a>
                  </li>
                </ul>
              </li>
              <li class="nav-item me-md-1 ms-md-1">
                <button class="contact-btn">
                  <a class="nav-link text-white contact-text" href="#">
                    CONTACT US
                  </a>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
export default Nav;
