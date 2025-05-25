import {Link} from "react-router";

const StartPage = () => {

    return(
        <>
            <p>Welcome to The Movie App! Please Log in to get started.</p>
            <p><Link to="/login">Login</Link></p>
            <p><Link to="/signup">Sign Up</Link></p>
        </>
    );
};

export default StartPage;