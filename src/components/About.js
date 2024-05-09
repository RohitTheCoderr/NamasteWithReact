// import UserProfile from "./User";
import {UserProfile2} from "./UserClassCom";
import React from "react";
import UserContext  from "../utils/UserContext";

// this is Function based component
// const About= ()=>{
// return(
//     <>
//     <h1>About page(components)</h1>
//     <UserProfile name={"Rohit"}/>
//     <UserProfile2 name={"Aryan"} qualification={"BCA"} contact= { "aakujmar12312@wfjsf"} location={"Faridabad"}/>
//     <h3>
//         This is Namaste React web series
//     </h3>
//     </>
// )
// }

// this is Class based component
class About extends React.Component{
    constructor(props){
        // console.log("parent constructor");
        super(props);
    }
     
    componentDidMount(){
        
    } 

    render(props){
        // console.log("parent render");
        return(
            <>
            <div id="AboutPage" className="bg-[#e0dcdc] text-center">
                <h1>About UserProfile</h1>
               <div className="w-[10rem] m-auto ">
                <UserContext.Consumer>
                    {({loggedInUser})=><h2 className="text-green-600">{loggedInUser}</h2>}
                </UserContext.Consumer>
               </div>
                {/* <UserProfile name={"Rohit"}/> */}
                {/* <UserProfile2 name={"Aryan"} qualification={"BCA"} contact= { "aakujmar12312@wfjsf"} location={"Faridabad"}/> */}
                <UserProfile2 email={"rohitkumar9643017@gmail.com"}/>
            </div>
            </>
            ) 
        }
}
export default About;