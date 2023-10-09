import {React} from 'react';
import { useFetchReservationQuery} from './API/bookBuddyApi';
import { useDeleteReservationMutation } from './API/bookBuddyApi';

export default function Reservation () {
    const {data, error, isLoading} = useFetchReservationQuery();
    
    //console.log(data.reservation[0].title);
    {error && <div> {error.message} </div>}
    {isLoading && <div>is loading ...</div>}


    return (
        < >
        {error ? (<p>No books found</p>):
        (
            (data.reservation.map(function(book){
           <>
          <p>{data.reservation.title}</p>
          <p>{data.reservation.author}</p>
    
             </>
            })))}
     
    

        </>

    )
}

        
       