import {React} from "react";
import {useSelector} from "react-redux";
import { useFetchUserQuery } from "./API/bookBuddyApi";

const Account = () => {

    const token = useSelector(state => state.token)

    console.log("TOKEN: ", token);

    const {data, error, isLoading} = useFetchUserQuery(token);

    {isLoading && <p>Loading ...</p>}

    {error && <p>Not Authorized User</p>}

    {console.log(data.email)}

     

    
    return (
        <>
        {data && console.log("hello")}
        
        
        <h2>user details</h2>
        <h2>checked out books here</h2> 
        
        </>
    )
}



export default Account 







