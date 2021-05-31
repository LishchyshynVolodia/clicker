import React from "react";
type IncType = {
    ResetFunction:()=>void
    count:number
}
 export function Reset(props:IncType) {
    return (
        <div>
            <button  className="reset"  onClick={props.ResetFunction}>Reset</button>
        </div>
    )
}