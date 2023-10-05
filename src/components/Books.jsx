import React from "react";
import {useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'


const Books = () => {
    const [allBooks, setAllBooks] = useState([])
    const [error, setError] = useState(null)
    const navigate = useNavigate();

    useEffect(() => {

        const fetchAllBooks = async () => {
            try {
                const response = await fetch('https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books/');
                const result = await response.json();
                //console.log(result);
                setAllBooks(result.books)
            } catch (error) {
                console.log(error);
            }
        }
        fetchAllBooks();
    }, []);

    return(
        <div>
            {error ? (
                <p>{error}</p>
            ) : (
                <ul>
                    {allBooks.map((book) => (
                        <li key={book.id}>{book.title}
                            <button onClick={() => navigate(`/books/${book.id}`)}>More Info</button>
                        <img src={book.coverimage} />
                        </li>
                        ))}
                </ul>
            )
            } 
        </div>
    );

};

export default Books