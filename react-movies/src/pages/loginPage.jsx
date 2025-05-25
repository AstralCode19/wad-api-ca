import { Link } from "react-router";

const LoginPage = () => {
    return(
        <>
            <h2>Login</h2>
            <p>Log in to see your own Favourites and Watch List</p>
            <input id="username" placeholder="Username"></input><bt />
            <input id="password" type="password" placeholder="Password"></input>
            <button>Log In</button>

            <p>If you do not have an account, please register, or feel free to browse without one.</p>
            <p><Link to="/signup">Sign Up</Link></p>
            <p><Link to="/">Home</Link></p>
        </>
    );
};

export default LoginPage;