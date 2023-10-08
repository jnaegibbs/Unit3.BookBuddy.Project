import React from 'react';
import { useState, useEffect } from 'react';
import {useParams} from "react-router-dom";
import { useFetchBookByIdQuery } from './API/bookBuddyApi';


const SingleBook = () => {
    const bookId = useParams();
    const {data, error, isLoading} = useFetchBookByIdQuery(bookId.id)
    console.log(bookId)
    if (isLoading) {
        return <div>Loading...</div>
    }
    if (error) {
        return <div>Error: {error.message}</div>
    }
    return(
        <>
        {data &&
        <div>
            <h2>{data.book.title}</h2>
            <h4>{data.book.author}</h4>
            <img src={data.book.coverimage} alt={data.name}/>
            <h4>{data.book.description}</h4>
        </div>}
        </>
    )
}
export default SingleBook









