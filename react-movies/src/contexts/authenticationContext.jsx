import {useState, createContext} from "react";
import { accountLogin } from "../api/tmdb-api";
import { accountSignup } from "../api/tmdb-api";

// export const AuthenticationContext = createContext(null);

// const authenticationContext = (props) => {

//     const authenticate = async (username, password) => {
//         const result = await accountLogin (username, password);
//         if (result.token) {
//             setToken(result.token)
//             setIsAuthenticated(true);
//             setUserName(username);
//         }
//     };

//     return (
//         <authenticationContext.Provider
//             value={{
//                 authenticate,
//                 username
//             }}
//         >
//             {props.children}
//         </authenticationContext.Provider>
//     )
// };

// export default authenticationContext;