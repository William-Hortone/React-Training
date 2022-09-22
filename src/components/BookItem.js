
export default function BookItem({ book, handleDelete }) {

  return (

    <div className="bookBox" >
        <h3>Book name</h3>
        <p>{book.bookName}</p>
        <h3>Author</h3>
        <p>{book.authorName}</p>
        <h3>Category</h3>
        <p>{book.bookCategory}</p>
        <h3>Description</h3>
        <p>{book.bookDescription}</p>
        
            <button className="btnDelete" onClick={() =>{handleDelete(book.id)}}>Delete</button>
        
    </div>
  );
}
