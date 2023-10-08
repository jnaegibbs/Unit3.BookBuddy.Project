import { useState, useEffect } from 'react';
import React from "react";
import { useNavigate, useParams } from 'react-router-dom'
import TextField from "@mui/material/TextField";
import { useFetchBooksQuery } from './API/bookBuddyApi';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import { Grid } from '@mui/material';


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

                    <TextField
                        type="text"
                        placeholder="Search"
                        onChange={(e) => setSearchParam(e.target.value.toLowerCase())}
                        style={{ marginLeft: "30%", width: "40%", padding: "2%" }}
                    />
                </label>
            </div>


            {error ? (
                <p>{error}</p>
            ) : (
                <Grid
                    container
                    spacing={2}
                    direction="row"
                    justify="flex-start"
                    alignItems="flex-start"
                >
                    <Grid item xs={12} sm={6} md={3} key={data.bookId}>

                        {filteredBooks && filteredBooks.map((book) => (
                            <div>
                                <Card sx={{ m: 10, border: 2, padding: 5, width: 300, maxWidth: "100%" }}>
                                    <CardMedia
                                        component="img"
                                        alt={data.name}
                                        image={book.coverimage} />
                                    <CardContent
                                        key={book.id}>{book.title}
                                    </CardContent>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        onClick={() => navigate(`/books/${book.id}`)}>More Info</Button>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        onClick={() => navigate('/Account') }
                                        style={{float:"right"}}>Add to Cart</Button>
                                       
                                </Card>
                            </div>

                        ))}

                    </Grid>
                </Grid>
            )

            }


        </div>
    );
};

export default Books;