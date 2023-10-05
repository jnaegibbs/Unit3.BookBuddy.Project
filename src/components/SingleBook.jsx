import React from 'react';
import { useState, useEffect } from 'react';
import {useParams} from "react-router-dom";
const SingleBook = () => {
    const[singleBook, setSingleBook] = useState(null)
    const[error, setError] = useState(null)
    const {id} = useParams();
    useEffect(()=> {
        async function fetchSingleBook() {
            try {
                const response = await fetch(`https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books/${id}`);
                const result = await response.json();
                console.log(result);
                setSingleBook(result)
            } catch(error) {
                setError(error.message);
            }
        }
        fetchSingleBook();
    }, [])
    return(

        <>

        {singleBook && 
        <div> 
            <h2>{singleBook.book.title}</h2>
            <h4>{singleBook.book.author}</h4>
            <img src={singleBook.book.coverimage} alt={singleBook.name}/>
            <h4>{singleBook.book.description}</h4> 
        </div>}   
        </>
    )
}
export default SingleBook












