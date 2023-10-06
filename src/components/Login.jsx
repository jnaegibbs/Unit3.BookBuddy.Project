/* TODO - add your code to create a functional React component that renders a login form */

/* TODO - add your code to create a functional React component that renders a login form */

import { React, useState } from 'react';

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    async function loginSubmit(event) {
        event.preventDefault();

        try {
            const response = await fetch("https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/users/login", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: email,
                    password: password
                })
            })
            const result = await response.json();
            console.log(result);
        } catch (error) {
            setError(e.message)
        }

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



        </>
    )

}