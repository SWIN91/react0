import React from 'react'

export default function Signup() {

    const handleSubmit = async (e) => {
        e.preventDefault();
        let res = await fetch ('http://127.0.0.1:5000/api/signup')
        let data = await res.json();
        console.log(data)
    }

    return (
        <div>
            <form onSubmit={(e)=>handleSubmit(e)}>
                <input name='username' placeholder='Username' type='text' />
                <br />
                <input name='email' placeholder='Email' type='' />
                <br />
                <input name='firstName' placeholder='First Name' type='text' />
                <br />
                <input name='lastName' placeholder='Last Name' type='text' />
                <br />
                <input name='password' placeholder='Password' type='password' />
                <br />
                <input name='confirmPassword' placeholder='Confirm Password' type='password' />
                <br />
                <input type='submit'/>
            </form>
        </div>
    )
};
