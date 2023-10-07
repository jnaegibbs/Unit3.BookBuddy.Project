/* TODO - add your code to create a functional React component that renders a registration form */
import {React, useState } from 'react';
import {useRegisterMutation} from './API/bookBuddyApi'

export default function Register() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const [register] = useRegisterMutation();

    async function registerSubmit(event){
        // event.preventDefault();

        // register({firstname: firstName, 
        //         lastname: lastName,
        //         email: email, 
        //         password: password});
        
        // {error && <p>unable to perform submission</p>}
   

        
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
                <input value={email} onChange={(e)=>setEmail(e.target.value)}/>
            </label> <br/>
            <label>
                Password: {" "}
                <input value={password} onChange={(e)=>setPassword(e.target.value)}/>
            </label> <br/>

            <button>Submit</button>

        </form>
        </>
    )
}