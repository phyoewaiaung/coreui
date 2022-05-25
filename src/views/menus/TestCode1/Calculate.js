import React from "react";

const Calculate=(props) => {
    return (
        <div>
            <label>value1</label>
            <input style={{marginLeft:2}} className="textBox" type="number" value={props.value1} onChange={props.value1Change}/>
            <label  style={{marginLeft:30}}>Operator</label>
            <input  style={{marginLeft:0}} className="textBox" type="text" value={props.value2} onChange={props.value2Change}/>
            <label  style={{marginLeft:30}}>value3</label>
            <input  style={{marginLeft:0}} className="textBox" type="number" value={props.value3} onChange={props.value3Change}/>
            <button className="equalBtn" onClick={props.Calculation}>=</button>
            <label  style={{marginLeft:20}}>restult</label>
            <input  style={{marginLeft:0}} className="textBox" type="text" value={props.result} onChange={props.restultChange}/>

        </div>
    )
}

export default Calculate;