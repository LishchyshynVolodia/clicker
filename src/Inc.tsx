import React from "react";
type IncType = {
    PlusFunction:()=>void
    count:number
    min_value:number
    max_value:number
}

 export function Inc(props:IncType) {
    return (
        <div>
            <button disabled={props.count == props.max_value} className={props.count==props.max_value ? "reset" : "non-active"} onClick={props.PlusFunction}>Inc</button>


        </div>
    )
}