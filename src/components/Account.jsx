import { React } from "react";
import { useFetchUserQuery } from "./API/bookBuddyApi";
import { Box ,Button,Typography} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import Reservation from "./Reservation";

const Account = () => {
  const token = useSelector(state=>state.token)
  const navigate = useNavigate();
  const { data, error, isLoading } =  useFetchUserQuery();


  {
    isLoading && <p>Loading ...</p>;
  }

    {error && <p>Not Authorized User</p>}



     

    
    return (
        <>
      
    <Box sx={{ m: 10, width: 800, maxWidth: "100%",border:"1px solid gray",padding:"20px",borderRadius:"10px" }}>
      
      {(data &&token) ? (
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
        
            <Typography variant="h6"><Reservation/></Typography>
        
        </div>

      )
     
      :<Typography variant="h5">Please Sign In for Details</Typography>}

        

    
        <Button variant="contained" onClick={()=>navigate('/')} style={{float:"right",margin:"5% 2%"}}>Back</Button>
        </Box>

    
      
      

        
    </>
    )
}



export default Account;
