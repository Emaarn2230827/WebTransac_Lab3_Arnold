function AfficheForm() {
    return (
    <>
        <br/>
        <div className="container-fluid">
            <div className="row">
                <div className="form-group has-search col-12 col-lg-6">
                    <span className="fa fa-search form-control-feedback"></span>
                    <input type="text" className="form-control" />
                </div>
                <p className="col-6 col-lg-2 text-center">Trier par:</p>
                <div className="col-6 col-lg-4">
                    <select className="form-select">
                        <option>select</option>
                    </select>
                </div>
            </div>
        </div>   
    </>);

}

function App()
{
    return <> 
           <Header />
           <AfficheForm />
           <BlogCard titre={"blog test"}> Bonjour le monde  </BlogCard>
           <BlogList />
           <Footer />
        
           </>;
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);