function ContextProvider({children}) {
    const [commentaires, setCommentaires] = React.useState([]);
    const ajouterCommentaire = (nouveauCommentaire) => {
        setCommentaires([...commentaires, nouveauCommentaire]);
      };
      return (
        <CommentaireContext.Provider value={{ commentaires, ajouterCommentaire }}>
          {children}
        </CommentaireContext.Provider>
      );
}