import React from "react";

const Add=(props) => {
    return (
        <div>
            <input className="textBox" type="text" value={props.value1} onChange={props.value1Change}/>
            <button className="equalBtn">+</button>
            <input className="textBox" type="text" value={props.value2} onChange={props.value2Change}/>
            <button className="equalBtn" onClick={props.Adding}>=</button>
            <input className="textBox" type="text" value={props.result}/>
        </div>
    )
}

export default Add;