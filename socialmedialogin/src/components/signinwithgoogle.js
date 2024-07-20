import React from "react";
import './signgooglestyle.css';
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "./firebase";
import {toast} from "react-toastify";

function Signinwithgoogle()
{
    function googlelogin()
    {
        const provider=new GoogleAuthProvider();
        signInWithPopup(auth,provider).then(async(result)=>{
            console.log(result);
            if(result.user)
            {
                toast.success("User loggen in Successfully",{
                    position:"top-center",
                });
                window.location.href="/profile";
            }
        })
    }


    return(<><div className="signingooglecontainer">
        <p>OR continue with</p>
        <img src={require("../googlesignin.png")} width={"50%"} onClick={googlelogin}/>

    </div></>)
}


export default Signinwithgoogle;