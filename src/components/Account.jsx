import { React } from "react";
import { useSelector } from "react-redux";
import { useFetchUserQuery } from "./API/bookBuddyApi";

const Account = () => {
  const token = useSelector((state) => state.token);

  console.log("TOKEN: ", token);

  const { data, error, isLoading } = useFetchUserQuery(token);
  console.log(data);

  {
    isLoading && <p>Loading ...</p>;
  }

    {error && <p>Not Authorized User</p>}



     

    
    return (
        <>
        {data && (
        <div>
          <h2>user details</h2>
          <p>{data.firstname} </p>
          <p>{data.lastname} </p>
          <p>{data.email} </p>
          <h2>checked out books here</h2>
        </div>
      )}
        

    
        
        </>
    )
}



export default Account;
