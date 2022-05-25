import React from "react";

const Multiply=(props) => {
    return (
        <div>
            <input className="textBox" type="text" value={props.mulValue1} onChange={props.mulValue1Change}/>
            <button className="equalBtn">*</button>
            <input className="textBox" type="text" value={props.mulValue2} onChange={props.mulValue2Change}/>
            <button className="equalBtn" onClick={props.Multiplying}>=</button>
            <input className="textBox" type="text" value={props.mulResult}/>
        </div>
    )
}

export default Multiply;