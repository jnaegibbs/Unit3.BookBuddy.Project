import { React } from "react";
import { useSelector } from "react-redux";
import { useFetchUserQuery } from "./API/bookBuddyApi";
import { Box ,Button,Typography} from "@mui/material";
import { useNavigate } from "react-router-dom";

const Account = () => {
  const token = useSelector((state) => state.token);
  const navigate = useNavigate();
  console.log("TOKEN: ", token);

  const { data, error, isLoading } = useFetchUserQuery(token);
  console.log(data);

  {
    isLoading && <p>Loading ...</p>;
  }

  {
    error && <p>Not Authorized User</p>;
  }

  return (
    <>
     <Button variant="contained" onClick={()=>navigate('/')} style={{margin:"2% 5% "}}>Back</Button>
    <Box sx={{ m: 10, width: 500, maxWidth: "100%",border:"1px solid gray",padding:"20px",borderRadius:"10px" }}>
       {token == null && <Typography variant="h5">Please Sign In for Details</Typography>}
      {data && (
        <div>
         <Typography variant="h5" color="primary" gutterBottom>
          User Details
        </Typography>
        <Typography variant="body1" gutterBottom>
          Name : {data.firstname+" "+data.lastname} 
          </Typography> 
          <Typography variant="body1" gutterBottom>
          Email : {data.email} 
          </Typography>
          <br/><br/>
          <Typography variant="h5" color="primary" gutterBottom>
          Checked out Books here
         </Typography>
          {data.books == null ? (
            data.books.map((book) => <Typography variant="h6">{book.title}</Typography>)
          ) : (
            <Typography variant="h6"> No Books Found</Typography>
          )}
        </div>
      )}
    </Box>
    </>
  );
};

export default Account;
