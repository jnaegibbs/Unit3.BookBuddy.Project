import React from 'react';
import { useState, useEffect } from 'react';
import {useNavigate, useParams} from "react-router-dom";
import { useFetchBookByIdQuery } from './API/bookBuddyApi';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const SingleBook = () => {
    const bookId = useParams();
    const {data, error, isLoading} = useFetchBookByIdQuery(bookId.id)
    const navigate = useNavigate();
    console.log(bookId)
    if (isLoading) {
        return <div>Loading...</div>
    }
    if (error) {
        return <div>Error: {error.message}</div>
    }
    return(
        <>
        <Button variant="contained" onClick={()=>navigate('/')} style={{marginTop:"40px"}}>Back to Home</Button>
        {data &&
        <Card sx={{m: 10, border: 2, padding: 5, width: 400, maxWidth: "100%",alignContent:"center"}}>
           <CardMedia
                component="img"
                alt={data.name}
                height="50%"
                image={data.book.coverimage} 
            />
           <CardContent> 
            <h2>{data.book.title}</h2>
            <h4>{data.book.author}</h4>
            <h4>{data.book.description}</h4>
        </CardContent> 
        </Card>}
        </>
    )
}
export default SingleBook









