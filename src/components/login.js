import { useState } from "react";
import { useHistory } from "react-router-dom";
import {Link} from "react-router-dom";
import background from "./assets/Login image.jpg";
import {signInWithEmailAndPassword, createUserWithEmailAndPassword}from 'firebase/auth';
import { auth } from "../firebase";

function Login (){
    const history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const btn = {
        width:'150px',
        height:'30px',
        marginTop:"3%"
    }

    const login = (()=>{
        signInWithEmailAndPassword(auth, email, password)
        .then(auth=>{history('/home')})
        .catch(error=>console.error(error))
    })

    const register = ()=>{
        createUserWithEmailAndPassword(auth,email,password)
        .then(auth=>{history('/home')})
        .catch(error=>console.error(error))
    }

    return(
        <div className="container" style={{ backgroundImage: background}}>

            <h1>Login</h1>
            <label className="label">E-mail</label>
            <input onChange={(e)=>setEmail(e.target.value)} autoComplete="off" type="email" placeholder="Enter your email" /> <br></br>
            <label>Password</label>
            <input onChange={(e)=>setPassword(e.target.value)} autoComplete="off" type="password" placeholder="Enter your password" />

            <Link to="/home"><button style={btn} onClick={login}>Login</button></Link>

            <span>Don't have an account</span> 
            <span>
                <Link to="/sign-up"><buttton onClick={register}>Create account here</buttton></Link>
                
            </span>
        </div>
    )
}

export default Login;