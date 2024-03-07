import React, { useState } from 'react';
import { Admines } from './identification';

const Login = ({setIsadmin}) => {
    const [username , setUsername] = useState('');
    const [password , setPassword] = useState('');
    const [alertErr , setAlertErr] = useState(false);

    // function to check data of user and give them access to app if it is admins
    function connect(e){
        e.preventDefault();
        Admines.map(a=>{
            if(a.name == username && a.password == password){
                setIsadmin(true)
            }else{
                setAlertErr(true);
            }
        })
        setUsername('');
        setPassword('');
    }
    return (
        <div className='w-25 mx-auto bg-secondary p-3 rounded-3 '>
            <form>
                <div className="mb-3 mt-3">
                    <label htmlFor="username" className="form-label">username:</label>
                    <input 
                        type="email" 
                        className="form-control" 
                        id="username" 
                        placeholder="Enter username" 
                        name="username"
                        value={username}
                        onChange={(e)=>setUsername(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="pwd" className="form-label">Password:</label>
                    <input 
                        type="password" 
                        className="form-control" 
                        id="pwd" 
                        placeholder="Enter password" 
                        name="pswd"
                        value={password}
                        onChange={(e)=>setPassword(e.target.value)}
                    />
                </div>
                <button 
                    type="submit" 
                    className="btn btn-primary w-100"
                    onClick={(e)=>connect(e)}
                >
                Submit</button>
            </form>
            {alertErr && <div className='mt-3 alert alert-danger text-center'>Your Are Not Admin!</div>}
        </div>
    );
}

export default Login;
