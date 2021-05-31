import React from "react";
type TableType = {
    count:number
    max_value:number
    min_value:number
}

export function Table( props:TableType) {
    const MaxCount = props.max_value<=props.min_value?<div className="MaxCount">"Max value must be bigger than min value "</div>:props.count
    return (
        <div className="table">
            {MaxCount}
        </div>
    )
}