function App()
{
    const params = new URLSearchParams(window.location.search);
    const idPub = params.get('id');
    return  (   
    <>
           <Header />
           <BlogDetails publicationId={idPub}/>
           <AddComment idPub={idPub} /> 
           <CommentList idPub={idPub}   />
           <Footer />
        
    </>);
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);