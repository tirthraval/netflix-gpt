
import { useState } from "react";
import Header from "./Header";
const Login = () =>{
    const [isSignIn, setIsSignIn] = useState(true);

    const toggleHandle = () =>{
        setIsSignIn(!isSignIn);
    }

    return(
        <div>   
                <Header/>
                <div className="absolute">
                    <img src="https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="background"/>
                </div>
                <from className = 'absolute w-3/12 mx-auto left-0 right-0 my-40 bg-black text-white p-12 rounded-lg  bg-opacity-80'>
                    <h1 className="font-bold text-2xl my-3">{isSignIn ?"Sign In":"Sign Up" }</h1>
                    {
                        !isSignIn &&<input type="text" placeholder="Enter Full Name" className="p-4 my-4 w-full bg-gray-700"/>
                    }
                    <input type="email" placeholder="Enter the Email" className="p-4 my-4 w-full bg-gray-700"/>
                    <input type="password" placeholder="Enter the Password" className="p-4 my-4 w-full bg-gray-700"/>
                    <button className="my-4 p-4 rounded-lg bg-red-700 w-full">{isSignIn ?"Sign In":"Sign Up" }</button>
                    <p className="my-5">{isSignIn ? "If New user? Please" : "Already a User? "} <span className="underline" onClick={toggleHandle}>{isSignIn ?"Sign Up":"Sign In" }</span></p>

                </from>
                
        </div>
    )
                
}

export default Login;