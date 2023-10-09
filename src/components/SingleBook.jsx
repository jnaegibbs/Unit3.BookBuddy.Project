import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import { useFetchBookByIdQuery } from './API/bookBuddyApi';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { useUpdateBookAvailabilityMutation } from './API/bookBuddyApi';
import {useSelector} from 'react-redux'

const SingleBook = () => {
    const {id:bookId} = useParams();
    const { data, error, isLoading } = useFetchBookByIdQuery(bookId)
    const navigate = useNavigate();
    console.log(bookId);

    const token = useSelector(state => state.token)
    console.log("TOKEN: ", token);

    const [updateBookAvailability] = useUpdateBookAvailabilityMutation();

    async function checkOut () {
        const available = true;
        const response = await updateBookAvailability( bookId, available
        );
        console.log("book available", response)
    }






    if (isLoading) {
        return <div>Loading...</div>
    }
    if (error) {
        return <div>Error: {error.message}</div>
    }



    return (
        <>
            <Button variant="contained" onClick={() => navigate('/')} style={{ marginTop: "40px" }}>Back to Home</Button>
            {data &&
                <Card sx={{ m: 10, padding: 5, width: 400, maxWidth: "100%" }}>
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
                    {token && 
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={() =>{checkOut()}}>Check Out</Button>
                    }
                    
                </Card>}
        </>
    )
}
export default SingleBook









