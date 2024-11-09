import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { Helmet } from "react-helmet-async";
import auth from "../Firebase/Firebase.init";
import { useState } from "react";

const Login = () => {

    const [user, setUser] = useState(null);

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const handleGoogleSignIn = () => {
        signInWithPopup(auth, googleProvider)
        .then((result) => {
            console.log(result);
            setUser(result.user);
        })
        .catch(error => {
            console.log('ERROR', error);
            setUser(null);
        })
    }
    const handleGithubSignIn = () => {
        signInWithPopup(auth, githubProvider)
        .then((result) => {
            console.log(result);
            setUser(result.user);
        })
        .catch(error => {
            console.log('ERROR', error);
            setUser(null);
        })
    }
    const handleSignOut = () => {
        signOut(auth)
        .then(() => {
            console.log('sign out done');
            setUser(null);
        })
        .catch(error => console.log(error))
    }

    return (
        <div className="space-x-5">
            <Helmet>
                <title>Login</title>
            </Helmet>
            {/* <button onClick={handleGoogleSignIn} className="btn mt-5">Login with Google</button>
            <button onClick={handleGoogleSignOut} className="btn mt-5">Sign Out</button> */}

            {
                user ? 
                <button onClick={handleSignOut} className="btn mt-5">Sign Out</button> :
                <div className="space-x-5">
                    <button onClick={handleGoogleSignIn} className="btn mt-5">Login with Google</button>
                    <button onClick={handleGithubSignIn} className="btn mt-5">Login with Github</button>
                </div>
            }

            {
                user && <div>
                    <h4>{user.displayName}</h4>
                    <p>Email: {user.email}</p>
                    <img src={user.photoURL} alt="User Profile" />
                </div>
            }
        </div>
    );
};

export default Login;
