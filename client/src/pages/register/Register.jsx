import './register.scss'
import Logo from '../../logo2.png';
import { useState } from 'react';
import { useRef } from 'react';

export default function Register() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const emailRef = useRef();
    const passwordRef = useRef();

    const handleStart = () => {
        setEmail(emailRef.current.value);
    }

    const handleFinish = () => {
        setPassword(passwordRef.current.value);
    }
    return (
        <div className="register">
            <div className="top">
                <div className="wrapper">
                    <img
                        className="logo"
                        src={Logo}
                        alt=""
                    />
                    <button className="loginButton">Sign In</button>
                </div>
            </div>
            <div className="container">
                <h1>Urban Views provides you unlimited movies, TV Shows trailers</h1>
                <h2>Sit back and enjoy trailers of new releases</h2>
                <p>
                    Ready to watch? Enter your email to create your personalized account
                </p>{
                    !email ? (
                        <div className="input">
                            <input type="email" placeholder="email address" ref={emailRef} />
                            <button className="registerButton" onClick={handleStart} >Get Going</button>
                        </div>
                    ) : (
                        <form className="input">
                            <input type="password" placeholder="password" ref={passwordRef} />
                            <button className="registerButton" onClick={handleFinish} >Start</button>
                        </form>)}
            </div>

        </div>
    )
}
