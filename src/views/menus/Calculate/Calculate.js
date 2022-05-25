import React,{useState} from "react";
import Add from "./Add";
import Multiply from "./Multiply";
import Subtract from "./Subtract";
import Divide from "./Divide";
import './style.css'

const Calculate = () => {


    const[value1,setValue1] = useState("");
    const[value2,setValue2] = useState("");
    const[result,setResult] = useState("");

    const[subValue1,setSubValue1] = useState("");
    const[subValue2,setSubValue2] = useState("");
    const[subResult,setSubResult] = useState("");

    const[mulValue1,setMulValue1] = useState("");
    const[mulValue2,setMulValue2] = useState("");
    const[mulResult,setMulResult] = useState("");

    const[divideValue1,setDivideValue1] = useState("");
    const[divideValue2,setDivideValue2] = useState("");
    const[divideResult,setDivideResult] = useState("");


    let totalAdd = "";
    let totalDivide = "";
    let totalMultiply = "";
    let totalSubtract = "";

    const value1Change =(e)=>{
        setValue1(e.target.value)
    }
    const value2Change =(e)=>{
        setValue2(e.target.value)
    }

    const divideValue1Change =(e)=>{
        setDivideValue1(e.target.value)
    }

    const divideValue2Change =(e)=>{
        setDivideValue2(e.target.value)
    }

    const mulValue1Change =(e)=>{
        setMulValue1(e.target.value)
    }

    const mulValue2Change =(e)=>{
        setMulValue2(e.target.value)
    }

    const subValue1Change = (e) => {
        setSubValue1(e.target.value)
    }
    const subValue2Change = (e) => {
        setSubValue2(e.target.value)
    }




    const Adding = () => {
        totalAdd = parseInt(value1) + parseInt(value2)
        setResult(totalAdd)
    }

    const Subtracting =() =>{
        totalSubtract = parseInt(value1)-parseInt(value2)
        setSubResult(totalSubtract)
    }

    const Multiplying =() =>{
        totalMultiply = parseInt(value1)*parseInt(value2)
        setMulResult(totalMultiply)
    }
    const Dividing =() =>{
        totalDivide = parseInt(value1)-parseInt(value2)
        setDivideResult(totalDivide)
    }
    

    return (
        <div>
            <div className="marginbot">
            <Add 
            value1={value1}
            value2={value2}
            result={result}
            value1Change = {value1Change}
            value2Change = {value2Change}
            Adding = {Adding}
            />
            </div>
            <div className="marginbot">
            <Subtract 
            subValue1={subValue1}
            subValue2={subValue2}
            subResult={subResult}
            subValue1Change={subValue1Change}
            subValue2Change={subValue2Change}
            Subtracting={Subtracting}
            />
            </div>
            <div className="marginbot">
            <Multiply 
            mulValue1={mulValue1}
            mulValue2={mulValue2}
            mulResult={mulResult}
            mulValue1Change={mulValue1Change}
            mulValue2Change={mulValue2Change}
            Multiplying={Multiplying}/>
            </div>
            <div className="marginbot">
            <Divide 
            divideValue1={divideValue1}
            divideValue2={divideValue2}
            divideResult={divideResult}
            divideValue1Change={divideValue1Change}
            divideValue2Change={divideValue2Change}
            Dividing={Dividing}/>
            </div>
        </div>
    )
}

export default Calculate;