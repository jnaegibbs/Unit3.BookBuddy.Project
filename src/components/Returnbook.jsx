import {React} from 'react';
import { useParams } from 'react-router-dom';
import { useDeleteReservationMutation } from './API/bookBuddyApi';
import {useSelector} from 'react-redux';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';

export default function Returnbook(){
const token = useSelector(state => state.token)
  console.log("TOKEN: ", token);

  const params = useParams();
  const reservationId = params.id;

  const [deleteReservation] = useDeleteReservationMutation();

  async function deleteCheckOut(){
    const response = await deleteReservation(reservationId);
    console.log(response);
    }

  

    return (
        <>
        <Typography variant="h6">
          Are you sure you would like to return reservation: {reservationId}?
          </Typography> <br />
        <Button variant="contained" color="primary" onClick={deleteCheckOut}>YES, PROCEED</Button>

      
        
        </>
    )
}