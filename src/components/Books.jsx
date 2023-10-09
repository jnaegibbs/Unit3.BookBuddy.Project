import { useState, useEffect } from 'react';
import React from "react";
import { useNavigate, useParams } from 'react-router-dom'
import TextField from "@mui/material/TextField";
import { useFetchBooksQuery } from './API/bookBuddyApi';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import { Grid, Typography } from '@mui/material';
import Box from '@mui/material/Box';

const Books = () => {

    const { data, error, isLoading } = useFetchBooksQuery();
    console.log(data)
    const [searchParam, setSearchParam] = useState("");
    const navigate = useNavigate();
    const bookId = useParams();
    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    const filteredBooks = searchParam
        ? data.books.filter((book) =>
            book.title.toLowerCase().includes(searchParam)
        )
        : data.books;

    return (
        <div>

            <div>
                <label>
                    <Typography 
                        variant='h6'
                        sx={{
                            marginLeft: "10%",
                            paddingBottom: 2,
                            width: "40%",
                        }}
                        >
                        Search for books here:
                    </Typography>
                    <TextField
                        type="text"
                        placeholder="Search"
                        onChange={(e) => setSearchParam(e.target.value.toLowerCase())}
                        style={{ marginLeft: "10%", width: "40%", paddingBottom: "5%" }}
                    />
                </label>
            </div>


            {error ? (
                <p>{error}</p>
            ) : (
                

                    <Grid item key={data.bookId}
                        sx={{
                            display: "flex",
                            flexWrap: "wrap",
                            marginLeft: "10%"
                        }}
                     >
                        {filteredBooks && filteredBooks.map((book) => (
                            <div key={book.id}>
                                <Card sx={{ marginBottom: 10, marginRight: 10, padding: 5, width: 300}}>
                                    <CardMedia sx={{height: 400}}
                                        component="img"
                                        alt={data.name}
                                        image={book.coverimage} />
                                    <CardContent 
                                        >{book.title}
                                    </CardContent>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        onClick={() => navigate(`/books/${book.id}`)}>More Info</Button>
                                    {/* <Button
                                        variant="contained"
                                        color="primary"
                                        onClick={() => navigate('/Account') }
                                        style={{float:"right"}}>Add to Cart</Button> */}
                                       
                                </Card>
                            </div>

                        ))}
                    </Grid>

            )

            }


        </div>
    );
};

export default Books;
