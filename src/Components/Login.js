
import { useRef, useState } from "react";
import Header from "./Header";
import { validateData } from "../utils/validate";
import { auth } from "../utils/firbase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
const Login = () => {

    const dispatch = useDispatch();
    const navvigate = useNavigate();
    const [isSignIn, setIsSignIn] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);
    const name = useRef(null)
    const email = useRef(null);
    const password = useRef(null);
    const toggleHandle = () => {
        setIsSignIn(!isSignIn);
    }
    const checkValidate = () => {
        const message = validateData(email.current.value,password.current.value);
        setErrorMessage(message);
        if (message) return; //user has enternd the email and password correctly

        //sign in and sinup logic
        if (!isSignIn) {
            //signn up form
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed up 
                    const user = userCredential.user;
                    updateProfile(user, {
                        displayName: name.current.value, photoURL: "https://lh3.googleusercontent.com/a/ACg8ocKR08ZHyZzCg4aCjTRst8vhryN6U_IiuxpT6NN720zis6A=s96-c-rg-br100"
                    }).then(() => {
                        // Profile updated!
                        const { uid, displayName, email, photoURL } = auth.currentUser;
                        dispatch(addUser({
                            email: email,
                            displayName: displayName,
                            photoURL: photoURL,
                            uid: uid
                        }))
                        navvigate('/browse');

                        // ...
                    }).catch((error) => {
                        // An error occurred
                        // ...
                    });

                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode + ' - ' + errorMessage)
                    // ..
                });
        }
        else {
            
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    



                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode+" - "+errorMessage)
                });

        }
    }
    return (
        <div>
            <Header />
            <div className="absolute ">
                <img  src="https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="background" />
            </div>
            <from onSubmit={(e) => e.prevent.default} className='absolute w-3/12 mx-auto left-0 right-0 my-40 bg-black text-white p-12 rounded-lg  bg-opacity-80'>
                <h1 className="font-bold text-2xl my-3">{isSignIn ? "Sign In" : "Sign Up"}</h1>
                {
                    !isSignIn && <input type="text" ref={name} placeholder="Enter Full Name" className="p-4 my-4 w-full bg-gray-700" />
                }
                <input ref={email} type="email" placeholder="Enter the Email" className="p-4 my-4 w-full bg-gray-700" />
                <input ref={password} type="password" placeholder="Enter the Password" className="p-4 my-4 w-full bg-gray-700" />
                <p className="text-red-800 font-bold text-lg py-3">{errorMessage}</p>
                <button className="my-4 p-4 rounded-lg bg-red-700 w-full" onClick={checkValidate}>{isSignIn ? "Sign In" : "Sign Up"}</button>
                <p className="my-5">{isSignIn ? "If New user? Please" : "Already a User? "} <span className="underline" onClick={toggleHandle}>{isSignIn ? "Sign Up" : "Sign In"}</span></p>

            </from>

        </div>
    )

}

export default Login;