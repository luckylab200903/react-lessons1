import { useRouteError } from "react-router-dom";
const Error=()=>{
    const err=useRouteError();
    console.log(err);
    return(<div>
    <h1>this is error page </h1>
    <h1>{err.error.stack}</h1>
    </div>)
}

export default Error;