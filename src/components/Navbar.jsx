const Navbar = ({ setCategory }) => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark sticky-top glass-navbar"
      style={{ backdropFilter: "blur(14px)", WebkitBackdropFilter: "blur(14px)", background: "rgba(0,0,0,0.4)" }}
    >
      <div className="container-fluid">
        <a className="navbar-brand fw-bold fs-3 text-white" href="#">
          <span className="badge bg-warning text-dark px-3 py-2">News Now</span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-2">
            {[
              "general",
              "business",
              "technology",
              "health",
              "science",
              "sports",
              "entertainment",
            ].map((cat) => (
              <li className="nav-item" key={cat}>
                <button
                  className="nav-link btn btn-link nav-glass-link"
                  style={{ cursor: "pointer", textTransform: "capitalize" }}
                  onClick={() => setCategory(cat)}
                >
                  {cat}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
