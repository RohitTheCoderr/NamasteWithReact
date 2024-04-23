import { useEffect } from "react";

const UserProfile = function (props) {

    useEffect(()=>{
      const timer=  setInterval(()=>{
            console.log("Namaste React function component");
        }, 1000)
        console.log("useEffect");

        return ()=>{
            clearInterval(timer);
            console.log("useEffect return");
        }
    }, [])
console.log("render");
    return(
        <>
        <div id="user-card">
              <h2>{props.name}</h2>
              <p>Contact: @rohitkr3181</p>
              <p>Email: rohitkumar123@gmail.com</p>
              <p>Location: Faridabad Haryana</p>
        </div>
        </>    )
}
export default UserProfile;