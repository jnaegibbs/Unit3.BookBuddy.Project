import { useState, useEffect } from 'react';
import React from "react";
import {useNavigate, useParams} from 'react-router-dom'
import TextField from "@mui/material/TextField";
import { useFetchBooksQuery } from './API/bookBuddyApi';




const Books = () => {

    
     const {data,error,isLoading} = useFetchBooksQuery();
      console.log(data)
    const [searchParam, setSearchParam] = useState("");
    const navigate = useNavigate();
    const bookId =useParams();
    if (isLoading) {
		return <div>Loading...</div>;
	}

  if (error) {
		return <div>Error: {error.message}</div>;
	}

    const filteredBooks = searchParam
             ? data.books.filter((book)=>
             book.title.toLowerCase().includes(searchParam)
             )
             : data.books;
            
    return(
        <div>
            
            <div>
                <label>

                    <TextField 
                        type="text"
                        placeholder="Search"
                        onChange={(e) => setSearchParam(e.target.value.toLowerCase())}
                        style={{marginLeft:"30%",width:"40%",padding:"2%"}}
                    />
    
                </label>
            </div>
            {error ? (
                <p>{error}</p>
            ) : (
                <ul>
                    {filteredBooks && filteredBooks.map((book) => (
                        <li key={book.id}>{book.title}
                             <button onClick={() => navigate(`/books/${book.id}`)}>More Info</button> 
                        <img src={book.coverimage} />
                        </li>
                        ))}
                </ul>
            )
            }
        </div>
    );   }

export default Books;