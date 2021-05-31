import React from "react";
import {Inc} from './Inc'
import {Reset} from './Reset'
type ButtonsType = {
    PlusFunction:()=>void
    ResetFunction:()=>void
    count:number
    max_value:number
    min_value:number
}


export function Buttons(props:ButtonsType) {
    return (
        <div className="buttons">
            <Reset ResetFunction={props.ResetFunction} count={props.count}  />
            <Inc PlusFunction={props.PlusFunction} max_value={props.max_value} min_value={props.min_value} count={props.count}/>
        </div>


    )

}