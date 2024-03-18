function AffichageData(idPub) {
    fetch(`http://localhost:3000/publications/${idPub}`)
        .then(response => response.json())
        .then(json => {
            document.getElementById('titrePub').innerHTML = json.titre;
            for(let i = 1; i <= 4; i++)
            {
                document.getElementById('cont'+`${i}`).innerHTML = json.contenu;
            }
           
                   // Récupérer les commentaires de la publication
                   return fetch(`http://localhost:3000/commentaires?idPub=${idPub}`);
                })
                .then(response => response.json())
                .then(commentaires => {
                    // Récupérer l'élément HTML où insérer les commentaires
                    const commentairesContainer = document.getElementById('commentairesContainer');
        
                    // Insertion n les commentaires
                    commentaires.forEach(commentaire => {
                        commentairesContainer.innerHTML += `
                            <div class="col-3  col-lg-1 ">
                                <p> <img src="../images/user.jpg" alt="user" height="65px" width="65px"/> </p>
                            </div>
                            <div class="col-9 col-lg-11 row " >
                            <p class="col-12 col-lg-12">
                                ${commentaire.contenu}
                            </p> 
                            </div>      
                        `;
                    });
                })
                .catch(error => console.error('Erreur lors de la récupération des détails de la publication:', error));
}

function AjouterCommentaire() {
    const idPub = recupId();
    const commentaire = document.getElementById('Commentaire').value;
    fetch(`http://localhost:3000/commentaires`, {
        method: 'POST',
        body: JSON.stringify({
            idPub: idPub,
            contenu: commentaire,
            datePublication: getCurrentDate()
        }),
        headers: {
            'Content-Type': 'application/json; charset=UTF-8', 
        }
    })
    .then(response => response.json())
    .then(() => {
        // Rafraîchir les commentaires après l'ajout
        AffichageData(idPub);
    })
    .catch(error => console.error('Erreur lors de l\'ajout du commentaire:', error));
}

function recupId() {
    const params = new URLSearchParams(window.location.search);
    const idPub = params.get('id');
    return idPub;
}

const idPub = recupId();   
if (idPub) {
    AffichageData(idPub);
} else {
    console.error('Aucun ID de publication trouvé dans l\'URL.');
}

function getCurrentDate() {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

$('#ajouterCommentaire').click(AjouterCommentaire);