function BlogCard({ id, titre, contenu }) {
    return (
        <div className="col-12 col-lg-4" key={id}>
            <div className="card" style={{ width: '18rem' }}>
            <a href={`blogPost.html?id=${id}`} className="blog">
                    <img src="../images/crypto.jpg" className="card-img-top" alt="crypto" />
                    <div className="card-body">
                        <div className="card bg-info text-white">
                            <div className="card-title">{titre}</div>
                        </div>
                        <p className="card-text">{contenu}</p>
                    </div>
                </a>
            </div>
        </div>
    );
}