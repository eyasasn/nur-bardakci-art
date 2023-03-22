import './Header.css'

function Header() {
    return (
        <nav className="navbar navbar-expand-lg pr-0 pl-0 pt-5 pb-3">
            <a className="navbar-brand brand-first-part" href="/">NUR <span className='brand-second-part'>BARDAKÇI</span></a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="" role="button" >
                    <i className="fa fa-bars" aria-hidden="true" style={{ color: "#e6e6ff" }}></i>
                </span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item ">
                        <a className="nav-link nav-link-left" href="/">HOME <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item dropdown ">
                        <a className="nav-link dropdown-toggle nav-link-left " href="#" role="button" data-toggle="dropdown" aria-expanded="false">
                            WORKS
                        </a>
                        <div className="dropdown-menu dropdown-menu-right mt-0 ">
                            <a className="dropdown-item dropdown-item-title" href="#">DRAWINGS</a>
                            <a className="dropdown-item dropdown-item-list" href="#">Sketch</a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item dropdown-item-title" href="#">PHOTOGRAPHY</a>
                            <a className="dropdown-item dropdown-item-list" href="#">Lorem Ipsum</a>
                            <a className="dropdown-item dropdown-item-list" href="#">Lorem Ipsum</a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item dropdown-item-title" href="#">VIDEO</a>
                            <a className="dropdown-item dropdown-item-list" href="#">Lorem Ipsum</a>
                        </div>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link nav-link-left " href="/exhibitions">EXHIBITIONS</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link nav-link-left " href="/collective">COLLECTIVE</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link nav-link-left " href="/blog">BLOG</a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link nav-link-left " href="/contact">CONTACT</a>
                    </li>
                </ul>
            </div>
        </nav >
    )
}

export default Header