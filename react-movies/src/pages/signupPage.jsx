import { Link } from "react-router";

const SignupPage = () => {
    return(
        <>
            <h2>Signup</h2>
            <p>Make an account to see your own Favourites and Watch List</p>
            <input placeholder="Username"></input><br />
            <input type="password" placeholder="Password"></input><br />
            <input type="password" placeholder="Password again"></input>
            <button>Sign up</button>

            <p>If you already have an account, please login, or feel free to browse without one.</p>
            <p><Link to="/login">Log in</Link></p>
            <p><Link to="/">Home</Link></p>
        </>
    );
};

export default SignupPage;