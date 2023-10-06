/* TODO - add your code to create a functional React component that renders a registration form */
import {React, useState } from 'react';

export default function Register() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    async function registerSubmit(){
        e.preventDefault();

        try{
            const response = await fetch("https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/users/register", {
                method:"POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    firstname: firstName,
                    lastname: lastName,
                    email: email,
                    password: password 
                })
            })
            const result = await response.json();
            console.log(result);
        } catch(error){
            setError(e.message);
        }

    }


    return (
        <>
        <h3>Register</h3>
        {error && <p>Unable to register</p>}

        <form method="POST" onSubmit={registerSubmit}>
            <label>
                First Name: {" "}
                <input value={firstName} onChange={(e)=>setFirstName(e.target.value)} />
            </label> <br/>
            <label>
                Last Name: {" "}
                <input value={lastName} onChange={(e)=>setLastName(e.target.value)}/>
            </label> <br/>
            <label>
                Email: {" "}
                <input value={email} onChange={(e)=>setEmail(e.target.event)}/>
            </label> <br/>
            <label>
                Password: {" "}
                <input value={password} onChange={(e)=>setPassword(e.target.event)}/>
            </label> <br/>

            <button>Submit</button>

        </form>
        </>
    )
}