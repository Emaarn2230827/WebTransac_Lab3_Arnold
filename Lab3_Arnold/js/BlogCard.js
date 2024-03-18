function BlogCard({ titre, children }) {
    return (
        <div className="col-12 col-lg-4">
            <div className="card" style={{ width: '18rem' }}>
                <a href="blogPost.html" className="blog">
                    <img src="../images/crypto.jpg" className="card-img-top" alt="crypto" />
                    <div className="card-body">
                        <div className="card bg-info text-white">
                            <div className="card-title">{titre}</div>
                        </div>
                        <p className="card-text">{children}</p>
                    </div>
                </a>
            </div>
        </div>
    );
}
