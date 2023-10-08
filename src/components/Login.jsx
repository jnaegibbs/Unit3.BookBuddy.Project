/* TODO - add your code to create a functional React component that renders a login form */

/* TODO - add your code to create a functional React component that renders a login form */

import { React, useState } from 'react';
import { useLoginMutation } from './API/bookBuddyApi';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("")
    const navigate = useNavigate();
  
    const [login ] = useLoginMutation();

    async function loginSubmit(event) {
        event.preventDefault();

     const response = await login({
        email:email,
        password:password
     })

     console.log(response);

    }

    return (
        <>
            <h3>Login</h3>

            {error && <p>Unable to login</p>}

            <form method="POST" onSubmit={loginSubmit} >
                <label>
                    Email:{" "}
                    <input value={email} onChange={(e) => setEmail(e.target.value)} />
                </label> <br/>
                <label>
                    Password:{" "}
                    <input value={password} onChange={(e) => setPassword(e.target.value)} />
                </label> <br/>
                <button disabled={error} type="submit">Submit</button>
            </form>

                <button onClick={() => navigate('/')}>Back</button>

        </>
    )

}