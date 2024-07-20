import {useEffect, useState} from "react";
import {auth,db} from "./firebase";
import './profile.css'
function Profile() {
    const [userDetails,setUserDetails]=useState(null);
    const fetchUserData= async()=>{

        auth.onAuthStateChanged(async(user)=>{
            console.log(user);
            setUserDetails(user);
        });
    };
    useEffect(()=>{fetchUserData();},[]);

    async function handlelogout()
    {
        try{
            await auth.signOut();
            window.location.href="/login";
            console.log("user logged out successfully");
        }
        catch(error)
        {
            console.error("Error logging out:",error.message);
        }
    }
    return(<div>
        {
            userDetails ? (<>
            <div className="outercontainer">
            <div className="profilecontainer">
            <div style={{display:"flex",justifyContent:"center"}}>

                <img src={userDetails.photoURL}/>
            </div>
            <h3>Welcome {userDetails.displayName}</h3>
            <div>
                <p>Email:{userDetails.email}</p>
                
                <button onClick={handlelogout}>Logout</button>
            </div>
            </div>
            </div>
            </>): (<p>Loading...</p>)
        }
    </div>)

}
export default Profile;