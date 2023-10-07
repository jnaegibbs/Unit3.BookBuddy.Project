import { useState, useEffect } from 'react';
import React from "react";
import {useNavigate} from 'react-router-dom'
import TextField from "@mui/material/TextField"



const Books = () => {
    const [allBooks, setAllBooks] = useState([])
    const [error, setError] = useState(null)
    const [searchParam, setSearchParam] = useState("");
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
    const filteredBooks = searchParam
             ? allBooks.filter((book)=>
             book.title.toLowerCase().includes(searchParam)
             )
             : allBooks;
    return(
        <div>
            <div>
                <label>

                    <TextField 
                        type="text"
                        placeholder="Search"
                        onChange={(e) => setSearchParam(e.target.value.toLowerCase())}
                    />
    
                </label>
            </div>
            {error ? (
                <p>{error}</p>
            ) : (
                <ul>
                    {filteredBooks.map((book) => (
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