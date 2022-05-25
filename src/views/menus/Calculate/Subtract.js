import React from "react";

const Subtract=(props) => {
    return (
        <div>
            <input className="textBox" type="text" value={props.subValue1} onChange={props.subValue1Change}/>
            <button className="equalBtn">-</button>
            <input className="textBox" type="text" value={props.subValue2} onChange={props.subValue2Change}/>
            <button className="equalBtn" onClick={props.Subtracting}>=</button>
            <input className="textBox" type="text" value={props.subResult}/>
        </div>
    )
}

export default Subtract;