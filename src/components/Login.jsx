import { React, useState } from "react";
import { useLoginMutation } from "./API/bookBuddyApi";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import { Button } from "@mui/material";
import { TextField } from "@mui/material";
import { Typography } from "@mui/material";
import { Box } from "@mui/material";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [success, setSuccess] = useState(null);

  const navigate = useNavigate();

  const [login, { error }] = useLoginMutation();

  async function loginSubmit(event) {
    event.preventDefault();

    const response = await login({
      email: email,
      password: password,
    });

    setSuccess(response.data.message);

    setEmail("");
    setPassword("");
    navigate("/");
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

        <Typography variant="h6" color="error">
          {error && <p> {error.message} </p>}
        </Typography>

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
        <Button variant="contained" color="primary" onClick={loginSubmit}>
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
