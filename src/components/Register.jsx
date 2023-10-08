/* TODO - add your code to create a functional React component that renders a registration form */
import {React, useState } from 'react';
import {useRegisterMutation} from './API/bookBuddyApi'
import { useNavigate } from 'react-router-dom';

import {TextField} from "@mui/material/";
import {Box} from "@mui/material/";
import { Typography } from "@mui/material";
import { Button } from "@mui/material"

export default function Register() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();
    

    const [register] = useRegisterMutation();

    async function registerSubmit(event){
        event.preventDefault();

        const response = await register({firstname: firstName, 
                lastname: lastName,
                email: email, 
                password: password});

                console.log(response);
        
         {error && <p>unable to perform submission</p>}
   

        
    }


    return (
        <>
    
        {error && <p>Unable to register</p>}

        <Box component="form"
        sx={{ m: 10, width: 500, maxWidth: "100%" }}
        autoComplete="off">
        
        <Typography variant="h5" color="primary" gutterBottom>
          Register
        </Typography>
            
            
        <TextField label="First Name"
          variant="filled"
          fullWidth
          required
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
           />
                
         <br/>
         <br/>

         <TextField label="Last Name"
          variant="filled"
          fullWidth
          required
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
           />
        
        <br />
        <br />
            
        <TextField label="Email"
          variant="filled"
          fullWidth
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
           />
        
        <br />
        <br />

        <TextField label="Password"
          variant="filled"
          fullWidth
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
           />
        
        <br />
        <br />

        <Button variant="contained" color="primary" onClick={registerSubmit}>
          Submit
        </Button>

        <Button
          variant="contained"
          color="primary"
          onClick={() => navigate("/")}
          style={{ float: "right" }}
          >
          Back
        </Button>

        </Box>
        </>
    )
}