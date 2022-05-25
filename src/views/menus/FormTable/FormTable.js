import React,{useState} from "react";
import Form from "./Form";
import Table from "./Table";
import './style.css'
import Search from "./Search";
import NewTable from "./NewTable";

const FormTable = ()=> {


    const [ dropData, setDropData ] = useState([
        {id: 1,name: "ID"},
        {id: 2,name: "Name"},
        {id: 3,name: "Email"},
        {id: 4,name: "Phone"}
      ])

      const [ searchData, setSearchData] =useState("");
      const [ resultArray, setResultArray] =useState([]);

      let searchChange = (e)=>{
          setSearchData(e.target.value);
      }
    
      let searchClick = () => {
          let tmp = [];
        if(searchData == ""){
            alert("Please Select");
        }
        else if(searchData == "1"){
            let idArray = {id:"id",name:"id",email:"id",phone:"id",des:"id"}
            tmp.push(idArray);
        }
        else if(searchData == "2"){
            let nameArray = {id:"name",name:"name",email:"name",phone:"name",des:"name"}
            tmp.push(nameArray)
            
        }
        else if(searchData == "3"){
         let emailArray = {id:"email",name:"email",email:"email",phone:"email",des:"email"}
            tmp.push(emailArray)
            
        }else {
            let phoneArray = {id:"phone",name:"phone",email:"phone",phone:"phone",des:"phone"}
            tmp.push(phoneArray)
        }
        setResultArray(tmp)
      }



    const[idValue,setIdValue] = useState("");
    const[nameValue,setNameValue] = useState("");
    const[emailValue,setEmailValue] = useState("");
    const[phoneValue,setPhoneValue] = useState("");
    let tmp =  /[0-9]|\./;

    const[tableArray,setTableArray] = useState([])

    const idValueChange=(e)=>{
        if(tmp.test(e.target.value)){
            setIdValue(e.target.value)
        }else{
            setIdValue("")
        }
    }

    
    const nameValueChange=(e)=>{
        if(!tmp.test(e.target.value)){
            setNameValue(e.target.value)
        }else{
            setNameValue("")
        }
    }

    
    const emailValueChange=(e)=>{
        setEmailValue(e.target.value)
    }

    
    const phoneValueChange=(e)=>{
        if(tmp.test(e.target.value)){
            setPhoneValue(e.target.value)
        }else{
            setPhoneValue("")
        }
    }

    const AddingData=()=> {

        if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailValue)) {
            alert("Enter Valid Email Address ")
          } else {
              if(idValue != "" && nameValue != "" && phoneValue != ""){
                let dataArr =[],tmp =[];
                if(tableArray.length > 0){
                    for(var i=0; i< tableArray.length; i++){
                        let oldId = tableArray[i];
                        if(oldId["id"] != idValue){
                                tmp["id"] = idValue;
                                tmp["name"] = nameValue;
                                tmp["email"] = emailValue;
                                tmp["phone"] = phoneValue;
                                setTableArray([...tableArray, tmp]);
        
        
                        }else if(oldId["id"] == idValue){
                            alert( idValue +" is exsit");
                            setTableArray(tableArray);
                            break;
                        }
                    }  
                }else{
                    tmp["id"] = idValue;
                    tmp["name"] = nameValue;
                    tmp["email"] = emailValue;
                    tmp["phone"] = phoneValue;
                    dataArr.push(tmp);
                    setTableArray(dataArr);
                }
                  }else{
                      alert("value cannot be null")
                  }
              }
      
    }

    let remove=(id)=>{
        let data = tableArray.filter(obj=>(id !=obj.id))
        setTableArray(data);
    }

    return (
       <div>
            <h1>Sample</h1><hr />
            <div>
                <Form 
                idValue={idValue}
                nameValue={nameValue}
                emailValue={emailValue}
                phoneValue={phoneValue}
                idValueChange={idValueChange}
                nameValueChange={nameValueChange}
                emailValueChange={emailValueChange}
                phoneValueChange={phoneValueChange}
                AddingData = {AddingData}
                 />
            </div>
            <div>
                <Search 
                dropData={dropData} searchData={searchData} searchChange={searchChange} searchClick={searchClick}/>
            </div>
            <div>

                <NewTable resultArray={resultArray}
                />
                {/* <Table 
                tableArray = {tableArray} remove={remove}
                /> */}
            </div>
       </div>
    )
}

export default FormTable;