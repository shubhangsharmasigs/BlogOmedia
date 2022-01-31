import React from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { auth } from './firebase';
import './SignIn.css';
import { useStateValue } from './StateProvider';

function SignIn() {

    const [email, setEmail] = useState("");
    const [password,setPassword] = useState("");
    const history = useHistory();
    const [{user}, dispatch] = useStateValue();


    const signIn = e =>{
        e.preventDefault();

        auth
            .signInWithEmailAndPassword(email, password)
            .then(auth => {
                dispatch({
                    type:"ADD_USER",
                     user:auth.user
                })
                history.push('/')
            })
            .catch(error => alert(error.message))
        
    }

    const register = e =>{
        e.preventDefault();

        auth
            .createUserWithEmailAndPassword(email,password)
            .then((auth) => {
                dispatch({
                    type:"ADD_USER",
                     user:auth.user
                })
                console.log(auth);
                if(auth){
                    history.push('/');
                }
            })
            .catch(error => alert(error.message));
    }
        console.log(user);
    return (
        <div className='signIn'>
            <div className="signIn-container">
                <h1>SignIn</h1>

                <form>
                    <h5>Email</h5>
                    <input type='text' value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <h5>Password</h5>
                    <input type='password'
                        value={password} onChange={e => setPassword(e.target.value)}
                    />
                    <button type="submit" onClick={signIn} className='signIn-btn'><strong>SignIn</strong></button>

                    <p>If you don't have an account.Click below and create one!</p>
                    
                    <button type="submit" onClick={register} className='register-btn'><strong>Create Your Own Personal Blogs</strong></button>
                </form>
            </div>
            
        </div>
    )
}

export default SignIn
