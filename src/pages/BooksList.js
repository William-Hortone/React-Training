import BookItem from "../components/BookItem";

export default function BooksList({books, handleDelete}){

    return(
        <div>
            <h1>List of my books</h1>
            <div className="bookContainer">
            {
                books.map(book => (
                    <BookItem book={book} key={book.id} handleDelete={handleDelete}/>
                ))
            }
            </div>  
        </div>
    )
}