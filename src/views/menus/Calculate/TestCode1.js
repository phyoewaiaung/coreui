import React,{useState} from "react";
import Calculate from "./Calculate";
import './style.css'

const TestCode1 = () => {

const[value1,setValue1] = useState("");
const[value2,setvalue2] = useState("");
const[value3,setValue3] = useState("");
const[result,setResult] = useState("");
let total = "";
const Calculation =() =>{
    // total = eval(value1)
    // setResult(total)
   total = eval(`${value1} ${value2} ${value3}`);
     setResult(total)
}

const value1Change = (e) => {
setValue1(e.target.value)
}
const value2Change = (e) => {
setvalue2(e.target.value)
}
const value3Change = (e) => {
setValue3(e.target.value)  
}
const restultChange = () => {
}

    return(
        <div>
            <Calculate 
            value1 = {value1}
            value2={value2}
            value3={value3}
            result={result}
            value1Change={value1Change}
            value2Change={value2Change}
            value3Change={value3Change}
            restultChange={restultChange}
            Calculation={Calculation}/>
            
        </div>
    )
}

export default TestCode1