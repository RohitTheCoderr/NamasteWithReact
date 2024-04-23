import { useRouteError } from "react-router-dom"; 

 const Error= function () {
    const ero = useRouteError()
    return(
        <>
        <h1>OOPs!!!</h1>
        <h2>Something went wrong !!!</h2>
        <div>{ero.status}: {ero.statusText}</div>
        </>
    )
 }

 export default Error;