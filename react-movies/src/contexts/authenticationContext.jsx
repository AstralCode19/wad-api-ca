import {useState, createContext} from "react";
import { accountLogin } from "../api/tmdb-api";
import { accountSignup } from "../api/tmdb-api";

export const AuthenticationContext = createContext(null); //eslint-disable-line

const authenticationContextProvider = (props) => {
    const existingToken = localStorage.getItem("token");
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [authToken, setAuthToken] = useState(existingToken); //eslint-disable-line
    const [userName, setUserName] = useState("");

    //Setting a JWT Token
    const setToken = (data) => {
        localStorage.setItem("token", data);
        setAuthToken(data);
    }

    // Making sure it is the correct user logging in
    const authenticate = async (username, password) => {
        const result = await accountLogin (username, password);
        if (result.token) {
            setToken(result.token)
            setIsAuthenticated(true);
            setUserName(username);
        }
    };

    // Signup
    const register = async (username, password) => {
        const result = await accountSignup(username, password);
        return result.success;
    };

    // Signout
    const signout = () => {
        setTimeout(() => setIsAuthenticated(false), 150);
    }

    return (
        <AuthenticationContext.Provider
            value={{
                isAuthenticated,
                authenticate,
                register,
                signout,
                userName
            }}
        >
            {props.children} {/*eslint-disable-line*/}
        </AuthenticationContext.Provider>
    );
};

export default authenticationContextProvider;