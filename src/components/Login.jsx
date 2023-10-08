/* TODO - add your code to create a functional React component that renders a login form */

/* TODO - add your code to create a functional React component that renders a login form */

import { React, useState } from "react";
import { useLoginMutation } from "./API/bookBuddyApi";
import { useNavigate } from "react-router-dom";
import {useSelector} from "react-redux";
import {useDispatch} from "react-redux";
import {setToken} from "./API/tokenSlice"

import { Button } from "@mui/material";
import { TextField } from "@mui/material";
import { Typography } from "@mui/material";
import { Box } from "@mui/material";


export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success,setSuccess] = useState("");

  const token = useSelector(state => state.token)
  console.log("TOKEN: ", token);
  
  const navigate = useNavigate();


  const [login] = useLoginMutation();

  async function loginSubmit(event) {
    event.preventDefault();

    const response = await login({
      email: email,
      password: password,
    });

    console.log(response);
    setSuccess(response.message)
    
    navigate(("/Account"));


  }

  

  return (
    <>
      <Box
        component="form"
        sx={{ m: 10, width: 500, maxWidth: "100%" }}
        autoComplete="off"
      >
        <Typography variant="h5" color="primary" gutterBottom>
          Login
          {success && <p>{success}</p>}
        </Typography>

        {error && <p>Unable to login</p>}
       
         
        <TextField
          label="Email"
          variant="filled"
          fullWidth
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <br />
        <br />
        <TextField
          label="Password"
          variant="filled"
          fullWidth
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <br />
        <Button variant="contained" color="primary" onClick= {loginSubmit}>
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
  );
}
