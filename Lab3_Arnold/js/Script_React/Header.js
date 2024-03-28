function Header() {
    return (
        <header>
            <div className="container-fluid">
                <nav className="row align-items-center navbar navbar-expand-lg navbar-dark">
                    <p className="col-6 col-lg-2 align-items-left">
                        <img src="../images/LogoCEPI.PNG" className="navbar-brand" alt="logo" id="logo" />
                    </p>
                    <button className="col-6 navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="col-6 col-lg-10 align-items-center collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav row align-items-center">
                            <li className="nav-item col-lg-3">
                                <a className="nav-link mx-5" href="index.html">Menu1</a>
                            </li>
                            <li className="nav-item col-lg-3">
                                <a className="nav-link mx-5" href="#">Menu2</a>
                            </li>
                            <li className="nav-item col-lg-2">
                                <a className="nav-link mx-5" href="#">Menu3</a>
                            </li>
                            <li className="nav-item col-lg-2">
                                <a className="nav-link mx-5" href="#">Menu4</a>
                            </li>
                            <li className="nav-item col-lg-2">
                                <a className="nav-link mx-5" href="#">
                                    <img src="../images/logoConnexion.png" alt="logoConnexion" id="logoConnexion" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    );
}
