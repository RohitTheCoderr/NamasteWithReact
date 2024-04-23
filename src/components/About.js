import UserProfile from "./User";
// import UserProfile2 from "./UserClassCom";
import React from "react";

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
            <div id="AboutPage">
                <h1>About UserProfile</h1>
                <UserProfile name={"Rohit"}/>
                {/* <UserProfile2 name={"Aryan"} qualification={"BCA"} contact= { "aakujmar12312@wfjsf"} location={"Faridabad"}/> */}
                {/* <UserProfile2 email={"rohitkumar9643017@gmail.com"}/> */}
            </div>
            </>
            ) 
        }
}
export default About;