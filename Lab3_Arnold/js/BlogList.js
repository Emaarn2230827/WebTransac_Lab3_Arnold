
function BlogList() {
    const [publications, setPublications] = React.useState([]);

    React.useEffect(() => {
        fetch('http://localhost:3000/publications')
            .then(response => response.json())
            .then(json => {
                setPublications(json);
            })
            .catch(error => console.error('Erreur lors de la récupération des données de l\'API:', error));
    }, []);

    return (
        <div className="container-fluid">
            <div className="row align-items-center" id="blogContainer">
                {publications.map((publication, index) => (
                    <div className="col-12 col-lg-4" key={index}>
                        <div className="card" style={{ width: '18rem' }}>
                            <a href={`blogPost.html?id=${publication.id}`} className="blog">
                                <img src="../images/crypto.jpg" className="card-img-top" alt="crypto" />
                                <div className="card-body">
                                    <div className="card bg-info text-white">
                                        <div className="card-title" id={`title${index + 1}`}>{publication.titre}</div>
                                    </div>
                                    <p className="card-text" id={`content${index + 1}`}>{publication.contenu}</p>
                                </div>
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

