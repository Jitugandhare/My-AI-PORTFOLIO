import { Link, useLocation } from 'react-router-dom';

function Navbar() {
    const { pathname } = useLocation();

    const getNavLinkClass = (path) => `nav-link ${pathname === path ? 'active' : ''}`;

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <Link className="navbar-brand" to="/">
                  Jitu
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link className={getNavLinkClass('/')} to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={getNavLinkClass('/projects')} to="/projects">Projects</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={getNavLinkClass('/career')} to="/career">Career</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={getNavLinkClass('/services')} to="/services">Services</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={getNavLinkClass('/research')} to="/research">Research</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={getNavLinkClass('/contact')} to="/contact">Contact</Link>
                        </li>
                         
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
