import { useState } from "react"

export default function AddBook({handleAddBook}){

// state //

const [book, setAddBook] = useState({
    bookName: "",
    authorName : "",
    bookCategory : "",
    bookDescription : ""  
})


// Comportment //
const handleChange = (event) =>{
    // console.log(event)
    const {name, value} = event.target;
    setAddBook({...book, [name] : value })
}

const handleSubmit = (e) =>{
    e.preventDefault();
    handleAddBook(book);
    setAddBook({
        bookName: "",
        authorName : "",
        bookCategory : "",
        bookDescription : ""
    });
}

//  Return //

    return(
        <div>
            <h1>Add your favories books</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="bookName">Book name</label>
                <input type="text" name="bookName" id="bookName" value={book.bookName} 
                onChange={(event)=>{handleChange(event)} } />
                <br />
                <label htmlFor="bookAuthor">Author</label>
                <input type="text" name="authorName" id="bookAuthor" value={book.authorName} 
                onChange={(event) =>{handleChange(event)}} />
                <br />
                <label htmlFor="bookCategory">Category</label>
                <select name="bookCategory" id="bookCategory"  value={book.bookCategory}
                onChange={(event) =>{handleChange(event)}}>
                    <option >Chose one option</option>
                    <option value="romantic">Romantic</option>
                    <option value="love">Love</option>
                    <option value="aventure">Aventure</option>
                    <option value="other">other</option>
                </select>
                <br />
                <label htmlFor="bookDescription">Description</label>
                <textarea name="bookDescription" id="bookDescription" cols="20" rows="10" 
                value={book.bookDescription} onChange={(event) =>{handleChange(event)}}></textarea>
                <br />
                <input type="submit"  value="Add book" className="btn" />
            </form>
        </div>
    )
}