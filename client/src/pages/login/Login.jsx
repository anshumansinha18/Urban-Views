import './login.scss'
import Logo from '../../logo2.png';


export default function Login() {
    return (
        <div className="login">
            <div className="top">
                <div className="wrapper">
                    <img
                        className="logo"
                        src={Logo}
                        alt=""
                    />
                </div>
            </div>
            <div className="container">
                <form>
                    <h1>Sign In</h1>
                    <input type="email" placeholder="email or phone number" />
                    <input type="password" placeholder="password" />
                    <button className="loginButton">Sign In</button>
                    <span>New User? <b>Get on board now.</b></span>
                </form>
            </div>

        </div>
    )
}
