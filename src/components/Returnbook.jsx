import { React } from "react";
import { useParams } from "react-router-dom";
import { useDeleteReservationMutation } from "./API/bookBuddyApi";
import { useSelector } from "react-redux";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import { useState } from "react";

export default function Returnbook() {
  const params = useParams();
  const reservationId = params.id;
  const [success,setSuccess] = useState("")

  const [deleteReservation] = useDeleteReservationMutation();

  async function deleteCheckOut() {
    const response = await deleteReservation(reservationId);
    console.log(response);
    setSuccess("Deleted Reservation Successfully")
  }

  return (
    <div style={{margin:"10%"}}>
    {success && <Typography variant="h6" color="primary">{success}</Typography>}
      <Typography variant="h6">
        Are you sure you would like to return reservation: {reservationId}?
      </Typography>{" "}
      <br />
      <Button variant="contained" color="primary" onClick={deleteCheckOut}>
        YES, PROCEED
      </Button>
    </div>
  );
}
