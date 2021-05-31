import React from "react";
export function Settings(props:any) {
 const disabledCheck = props.min_value >= props.max_value
    return (
        <div className="settings">
            <div className="setting">
                <div className="min_value">
                    <div> Min value</div>
                   <input    onChange={props.ChangeMin_value} value={Number(props.min_value)} className="min_value_input" type="number" />
                </div>

                <div className="max_value">
                    <div> Max value</div>
                    <input   onChange={props.ChangeMaxValue} value={props.max_value} className="max_value_input" type="number" />
                </div>
            </div>
            <button onClick={props.SetValues} onChange={props.ChangeMaxValue} className={props.min_value >= props.max_value ? "non-active" : "reset"}>Set</button>
        </div>
    )
}
