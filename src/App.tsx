import React, {ChangeEvent, useState} from 'react';
import './App.css';
import {Table} from "./Table";
import {Buttons} from "./Buttons";
import {Settings} from "./Settings"

function App() {
    let [count, countUpdate] = useState(0)
    function Plus() {
        if (count <= max_value) {
            countUpdate(count + 1)
        }
    }
    function Reset() {
        countUpdate(min_value)
    }
    let[min_value,setMinValue]=useState<number>(0)
    let[max_value,setMaxValue]=useState<number>(5)
    const ChangeMin_value = (e:ChangeEvent<HTMLInputElement>)=>{
        setMinValue(Number(e.currentTarget.value))
    }
    const ChangeMaxValue = (e:any)=>{
        setMaxValue(Number(e.currentTarget.value))
    }
    const SetValues=(e:any)=>{
        
        countUpdate(min_value)
    }

    return (
        <div className="App">
            <div className="settings_main" >
                <Settings  SetValues={SetValues}
                           min_value = {min_value}
                           ChangeMin_value={ChangeMin_value}
                           ChangeMaxValue={ChangeMaxValue}
                           max_value={max_value}
                           count={count}
                />
            </div>
            <div className="counter">
                <Table count={count}
                       max_value={max_value}
                       min_value = {min_value}/>
                <Buttons PlusFunction={Plus}
                         ResetFunction={Reset}
                         max_value={max_value}
                         min_value = {min_value}
                         count={count}/>
            </div>


        </div>
    );
}
export default App;
