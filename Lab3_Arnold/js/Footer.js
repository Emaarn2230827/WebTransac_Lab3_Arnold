function Footer() {
    return (
        <footer>
            <br />
            <div className="container-fluid">
                <div className="row">
                    <p className="col-5 text-right">
                        <a href="https://www.facebook.com/"><img src="../images/facebook.png" className="logoReso" alt="facebook" /></a>
                    </p>
                    <p className="col-2 text-center">
                        <a href="https://twitter.com/?lang=fr"><img src="../images/twitterLogo.png" className="logoReso" alt="twitter" /></a>
                    </p>
                    <p className="col-5">
                        <a href="https://www.instagram.com/"><img src="../images/inLogo.png" className="logoReso" alt="In" /></a>
                    </p>
                </div>
                <br /> {/* Déplacé le deuxième <br /> avant la deuxième div.row */}
                <div className="row text-center">
                    <p>Centre d'Expertise et de Perfectionnement en Informatique</p>
                    <p>2022.</p>
                </div>
            </div>
        </footer>
    );
}
