import React, { useEffect, useState } from "react";
import Form from "./Form";
import Table from "./Table";
import ShowDetail from "./ShowDetail";

const StudentTableForm = () => {

    const[id,setId] = useState("");
    const[name,setName] = useState("");
    const[email,setEmail] = useState("");
    const[phone,setPhone] = useState("");


    const[resultArray,setResultArray] = useState([]);
    const[showArray,setShowArray] = useState([]);

    let numberFormat =  /[0-9]|\./;
    let emailFormat =/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;

    let idChange = (e) => {
        if(numberFormat.test(e.target.value)){
            setId(e.target.value)
        }else{
            setId("")
        }
    }
    let nameChange = (e) => {
        if(!numberFormat.test(e.target.value)){
            setName(e.target.value)
        }else{
            setName("")
        }
    }
    let emailChange = (e) => {
            setEmail(e.target.value)
    }
    let phoneChange = (e) => {
        if(numberFormat.test(e.target.value)){
            setPhone(e.target.value)
        }else{
            setPhone("")
        }
    }

    let addClick = () => {
        if(id=="" || name=="" || email=="" || phone==""){
            alert("Input Value Cannot be Null")
        }
        else{
            if(emailFormat.test(email)){
                let dataArray = [],tmp = []
                if(resultArray.length > 0){
                    for(var i =0; i<resultArray.length; i++){
                        let oldId = resultArray[i];
                        if(oldId["id"] != id){
                            tmp["id"]=id;
                            tmp["name"]=name;
                            tmp["email"]=email;
                            tmp["phone"]=phone;
                            setResultArray([...resultArray,tmp])
                        }
                        else{
                            alert( id +" is exsit");
                            setResultArray(resultArray)
                            break;
                        }
                    }
                }else {
                    tmp["id"] = id;
                    tmp["name"] = name;
                    tmp["email"]=email;
                    tmp["phone"]=phone;
                    dataArray.push(tmp);
                    setResultArray(dataArray)
                }
            }else{
                alert("Enter Valid Email Address")
            }
        }
    }


    let detailClick =(data)=> {
        setShowArray(data)
    }
    let resetClick = () => {
        setShowArray({id:"",name:"",email:"",phone:""})
    }

    return (
        <div>
            <Form 
            id={id}
            name={name}
            email={email}
            phone={phone}
            idChange={idChange}
            nameChange={nameChange}
            emailChange={emailChange}
            phoneChange={phoneChange}
            addClick={addClick}/>
            <Table 
            resultArray={resultArray}
            detailClick={detailClick}/>
            <ShowDetail 
            showArray={showArray}
            resetClick={resetClick}/>
        </div>
    )
}

export default StudentTableForm;