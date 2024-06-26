function BlogDetails({ publicationId }) {
  const [publication, setPublication] = React.useState({});

  React.useEffect(() => {
    fetch(`http://localhost:3000/publications/${publicationId}`)
      .then(response => response.json())
      .then(json => {
        setPublication(json)
    })
      .catch(error => console.error('Erreur lors de la récupération des données de l\'API:', error));
  }, [publicationId]);

  return (
           
            <div className="container-fluid">
               <br/>
                <div className="row">
                <figure className="col-12 col-lg-12">
                    <img src="../images/crypto.jpg" alt="crypto" className="banner" width="100%" height="200px" />
                    <figcaption><h1 className="text-center">{publication.titre}</h1></figcaption>
                </figure>
                <br />
                <p className="col-12 col-lg-12">{publication.contenu}</p>
                <p className="col-12 col-lg-12">{publication.contenu}</p>
                <figure className="col-12 col-lg-12 text-center">
                    <img src="../images/blog3.jpg" width="195px" height="130px" alt="communication" />
                    <figcaption>communication</figcaption>
                </figure>
                <p className="col-12 col-lg-12">{publication.contenu}</p>
                <p className="col-12 col-lg-12">{publication.contenu}</p>
                </div>
            
            </div>

  );
}

