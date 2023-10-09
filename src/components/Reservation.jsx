import { React, useState } from "react";
import { useFetchReservationQuery } from "./API/bookBuddyApi";
import Button from "@mui/material/Button";

import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Reservation() {
  const token = useSelector((state) => state.token);
  console.log("TOKEN: ", token);

  const navigate = useNavigate();

  const { data, error, isLoading } = useFetchReservationQuery();
  console.log(data);

  
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  // const [deleteReservation] = useDeleteReservationMutation();

  // async function deleteCheckOut(){
  //     setReservationId(booksObj.id)
  //     const response = await deleteReservation(reservationId);
  //     console.log(response);
  // }

  return (
    <>
      {error && <p>No books found</p>}

      {data ? (
        data.reservation.map((booksObj) => {
          return (
            <div style={{ display: "flex", flexDirection: "column" }}>
              <br />
              <div>
                {" "}
                <b>Title:</b> {booksObj.title} <br />
              </div>
              <div>
                <b>Author:</b> {booksObj.author} <br />
              </div>
              <br />
              <Button
                variant="contained"
                color="primary"
                style={{ width: "200px" }}
                onClick={() => navigate(`/Returnbook/${booksObj.id}`)}
              >
                Return Book
              </Button>
            </div>
          );
        })
      ) : (
        <p>error</p>
      )}
    </>
  );
}
