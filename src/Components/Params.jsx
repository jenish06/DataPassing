import { useParams, useLocation } from "react-router-dom";

function Params (){
    const params = useParams();
    const {name} = params;
    const location = useLocation();
    console.log(location);
    return(
        <div>
            <h1>This is {name}'s Page</h1>
        </div>
        
    )
}

export default Params;