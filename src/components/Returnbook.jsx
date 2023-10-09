import {React} from 'react';
import { useParams } from 'react-router-dom';
import { useDeleteReservationMutation } from './API/bookBuddyApi';
import {useSelector} from 'react-redux';

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
        <p>Are you sure you would like to return reservation: {reservationId}?</p>
        <button onClick={deleteCheckOut}>YES, PROCEED</button>
        
        </>
    )
}