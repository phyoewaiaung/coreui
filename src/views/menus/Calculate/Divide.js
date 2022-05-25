import React from "react";

const Divide=(props) => {
    return (
        <div>
            <input className="textBox" type="text" value={props.divideValue1} onChange={props.divideValue1Change}/>
            <button className="equalBtn">%</button>
            <input className="textBox" type="text" value={props.divideValue2} onChange={props.divideValue2Change}/>
            <button className="equalBtn" onClick={props.Dividing}>=</button>
            <input className="textBox" type="text" value={props.divideResult}/>
        </div>
    )
}

export default Divide;