import { React, useState } from "react";
import { useFetchReservationQuery} from './API/bookBuddyApi';

import {useSelector} from 'react-redux';
import { useNavigate } from "react-router-dom";

export default function Reservation() {
const token = useSelector(state => state.token)
  console.log("TOKEN: ", token);

  const navigate = useNavigate();


  const {data, error, isLoading} = useFetchReservationQuery();
    console.log(data);
    
    //console.log(data.reservation[0].title);
    if (isLoading) {
        return <div>Loading...</div>
    }
    if (error) {
        return <div>Error: {error.message}</div>
    }

    // const [deleteReservation] = useDeleteReservationMutation();

    // async function deleteCheckOut(){
    //     setReservationId(booksObj.id)
    //     const response = await deleteReservation(reservationId);
    //     console.log(response);
    // }

    return (
        < >
        {error && <p>No books found</p>}
        
       {data ? (data.reservation.map((booksObj) => {
        return (
           <div>
         <b>Title:</b> {booksObj.title} {<br/>}
         <b>Author:</b> {booksObj.author} {<br/>}
         
         <button onClick={()=>navigate(`/Returnbook/${booksObj.id}`)}>Return Book</button>
            </div> )})): (
                <p>error</p>
            )}
            
       
            
    
       
     
    

        </>

    )  
}

        
       