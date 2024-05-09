import React, { lazy,Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import BodyLayout from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import ResturentMenu from "./components/ResturentMenu";
import Footer from "./components/Footer";
import UserContext from "./utils/UserContext";
// import Grocery from "./components/grocery";

// if we want to our component is load as lazy so we can use lazy and the import the component is totalely different 
// we can also import Grocery component by using lazy. lazy is provide by react its take a call a import it is also function but this import is not a same like upper we used 
// they are totaly different they take a path of the  component

const Grocery=lazy(()=>import("./components/grocery"))

const AppLayout = ()=>{
    //  authentication
    const [userName, setUserName]= useState()

useEffect(()=>{
    // make an API call and send userName and password
    const data= {
        name:"Rohit"
    }
    setUserName(data.name)
}, [])
console.log(setUserName);
    return(
            // and  in my all App uservalue is Aryan but 
              // only header value is Rohit
            <UserContext.Provider value={{loggedInUser:"Aryan"}}> 
        <div className="">
            {/* <UserContext.Provider value={{loggedInUser:userName, setUserName}}>   */}
            <UserContext.Provider value={{loggedInUser:userName}}>  
          <Header/>
        </UserContext.Provider>
            <Outlet/>
          <Footer/>
        </div>
        </UserContext.Provider>
    )
   }

   const approuter =  createBrowserRouter([
    {path:'/',
element: <AppLayout/>,
children:[
{
    path: '/',
    element: <BodyLayout/>
},

{
    path : '/about',
    element: <About/>
},
{
    path : '/contact',
    element: <Contact/>
},
{
    path : '/grocery',
    element: <Suspense fallback={<h1>Loading.....</h1>}><Grocery/></Suspense>     // yha suspense ek method h jo react provide karta h ye lazy ke sath hi use hote h esse kya hua ki jab tak hamara Grocery nhi load ho jata yni jitne tim me ye load hoga us bich ye fallback lme jo jsx hota h use show kar deta h  jab tak ye suspense is jsx ko show kar dega 
},
{
    path : '/resturent/:resId',
    element: <ResturentMenu/>
},
],
errorElement:<Error/>,
}, 
   ]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={approuter}/>);




// what is configuration-driven UI