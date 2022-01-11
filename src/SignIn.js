import React from 'react';
import { useState } from 'react-router-dom';
import './SignIn.css';

function SignIn() {

    const [email, setEmail] = useState();
    return (
        <div className='signIn'>
            <div className="signIn-container">
                <h1>SignIn</h1>

                <form>
                    <h5>Email</h5>
                    <input type='text' />
                    <h5>Password</h5>
                    <input type='password'/>
                    <button className='signIn-btn'><strong>SignIn</strong></button>

                    <p>If you don't have an account.Click below and create one!</p>

                    <button className='register-btn'><strong>Create Your Own Personal Blogs</strong></button>
                </form>
            </div>
            
        </div>
    )
}

export default SignIn
