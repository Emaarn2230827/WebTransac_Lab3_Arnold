 function RecuperationDataPub() {
    fetch('http://localhost:3000/publications') 
        .then(response => response.json())
        .then(json => {
       
            const blogContainer = document.getElementById('blogContainer');
            for (let i = 0; i < json.length; i++) {
                let publication = json[i];
                blogContainer.innerHTML +=  `
                    <div class="col-12  col-lg-4">       
                        <div class="card" style="width: 18rem;">
                            <a href="blogPost.html?id=${publication.id}" class="blog">
                                <img src="../images/crypto.jpg" class="card-img-top" alt="crypto"/>
                                <div class="card-body">
                                    <div class="card bg-info text-white">
                                        <div class="card-title" id="title${i + 1}">${publication.titre}</div>
                                    </div>
                                    <p class="card-text" id="content${i + 1}">${publication.contenu}</p>                       
                                </div>
                            </a>
                        </div>
                    </div>
                `;              
            }        
        })
        .catch(error => console.error('Erreur lors de la récupération des données de l\'API:', error));
}

RecuperationDataPub();



















