import { useSearchParams } from "react-router-dom";

function Filter(){
const [searchParams,setSearchParams] = useSearchParams();
const age = searchParams.get("age");
const city = searchParams.get("city");

    return(
        <div>
            <h1>Filter Page</h1>
            <h2>Age is: {age}</h2>
            <h2>City is: {city}</h2>
            <input type="text" onChange={(e)=>setSearchParams({text:e.target.value})} />
            <button onClick={()=>setSearchParams({age:40})}>set age </button>

        </div>  
    )
}
export default Filter;