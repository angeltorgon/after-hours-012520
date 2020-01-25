import React, { useState } from 'react';
import axios from 'axios';

export default function Signup(props) {
    const [inputs, setInputs] = useState({
        fullName: "",
        username: "",
        email: "",
        password: ""
    });

    const handleChanges = (e) => {
        e.preventDefault();
        setInputs({...inputs, [e.target.name]: e.target.value})
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
        .post('https://ptbw-art-portfolio.herokuapp.com/auth/signup', inputs)
        .then((res) => {
            console.log("response", res);
            // save your token to local storage
            localStorage.setItem("token", Date.now())
            props.history.push("/dahboard");
        })
        .catch((err) => {
            console.error(err);
        })
        console.log("inputs at handleSubmit", inputs);
    };

    return (
        <form style={{dispay:"flex", height:"500px", margin:"50px auto",}} onSubmit={handleSubmit}>
            <div class="input-field col s6">
                <input onChange={handleChanges} name="fullName" type="text" value={inputs.fullName}/>
                <label for="input_text">Full Name</label>
            </div>
            <div class="input-field col s6">
                <input onChange={handleChanges} name="username" type="text" value={inputs.username}/>
                <label for="input_text">Username</label>
            </div>
            <div class="input-field col s6">
                <input onChange={handleChanges} name="email" type="text" value={inputs.email}/>
                <label for="input_text">Email</label>
            </div>
            <div class="input-field col s6">
                <input onChange={handleChanges} name="password" type="text" value={inputs.password}/>
                <label for="input_text">Password</label>
            </div>

            <button class="waves-effect waves-light btn">Submit</button>

        </form>
    )
}
