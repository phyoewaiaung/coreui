import React, {useState,useEffect} from "react";
import UserRegister from "./userRegister";
import UserProfile from "./userProfile";
import Table from "./Table";
import Plus from "./Plus";
import "../../../css/style.css"
// import "./css/style.css";


// import {
  
//   CCard,
//   CCardBody,
//   CCardHeader,

//   CCol,
//   CRow,
//   CLabel,
//   CImg
// } from '@coreui/react'
// import routes from '../../../routes'
// import {PI, add} from './math';
// import UserData from './UserData';
// import sub from './sub';


const SubMenu = () => {



  const [userName,setUserName] = useState("");
  const [fullName,setFullName] = useState("");
  const [email,setEmail] = useState("");
  const [phone,setPhone] = useState("");
  const [address,setAddress] = useState("");

  const [usName, setUsName ] = useState("");
  const [fName, setFName] = useState("");
  const [mail,setMail] = useState("");
  const [ph,setPh] = useState("");
  const [addr, setAddr] = useState("");

  const [tableUsername,setTableUserName] = useState("");
  const [tableFullName,setTableFullName] = useState("");
  const [tableEmail,setTableEmail] = useState("");
  const [tablePhone,setTablePhone] = useState("");
  const [tableAddress,setTableAddress] = useState("");



  let userNameChange = (e)=>{
    setUsName(e.target.value)
    setUserName(e.target.value)
  }
  const fullNameChange = (e) => {
    setFName(e.target.value)
    setFullName(e.target.value);
  }
  const emailChange = (e) => {
    setMail(e.target.value)
    setEmail(e.target.value);
  }
  const phoneNoChange = (e) => {
    setPh(e.target.value)
    setPhone(e.target.value);
  }
  const addressChange = (e) => {
    setAddr(e.target.value)
    setAddress(e.target.value);
  }

  const Plus1 = () => {
    setTableUserName(userName)
    setTableFullName(fullName)
    setTableEmail(email)
    setTablePhone(phone)
    setTableAddress(address)
  }

  return (
    <div>
      <div className="home">
      <div>
      <UserRegister 
      userName = {userName}
      fullName = {fullName}
      email = {email}
      phone = {phone}
      address = {address}
      userNameChange={userNameChange}
      fullNameChange={fullNameChange}
      emailChange = {emailChange}
      phoneNoChange = {phoneNoChange}
      addressChange = {addressChange}
      />
      </div>
      <div>
      <UserProfile 
      userName={usName} 
      fullName = {fName}
      email = {mail}
      phone = {ph}
      address = {addr}/>
      </div>
      </div>
      <div className="center">
        <Plus 
        Plus = {Plus1}/>
      </div>
      <div>
        <Table 
        tableUsername={tableUsername}
        tableFullName={tableFullName}
        tableEmail={tableEmail}
        tablePhone={tablePhone}
        tableAddress={tableAddress}/>
      </div>
    </div>
  )
}





  // let total = UserData.length;
  // let greater_count = UserData.filter(data=> data.age > 18).length;
  // let greater_data = UserData.filter(data=> data.age > 18);


  // return (
  //   <CRow>
  //     <CCol xs="12">
  //       <CCard>
  //         <CCardHeader>
  //           <h2>Student Lists</h2>
  //         </CCardHeader>
  //         <CCardBody style={{color:"wheat"}}>
          {/* <h5 style={{color:"green"}}>Total Student Count = {total} </h5>
          <h5 style={{color:"green"}}>Total greater than 18 years count = {greater_count} </h5><br/>
          {greater_data.map((data,index)=>{
          
          let bg = "";
          if(index%2 == 0) {
            bg = "blue";
          }else {
            bg = "gray"
          }


            return(
             <div   key={index}>
                  <div  style={{backgroundColor:`${bg}`}}>
                    <div style={{display: 'flex'}}>
                      <CImg src={'/avatars/c.png'}  alt="titleicon" width={28} height={28} />
                      <h5 style={{width: "200px" ,marginLeft : "20px" ,fontFamily :'sans-serif'}}>ID </h5>
                      <h5  style={{width: "200px" ,fontFamily :'sans-serif'}}>:{data.student_id}</h5>
                    </div>
                    <div style={{display: 'flex'}}>
                      <CImg src={'/avatars/name.png'}  alt="titleicon" width={28} height={28} />
                      <h5 style={{width: "200px" ,marginLeft : "20px",fontFamily :'sans-serif'}}>Name </h5>
                      <h5  style={{width: "200px" ,fontFamily :'sans-serif'}}>:{data.student_name}</h5>
                    </div>
                    <div style={{display: 'flex'}}>
                      <CImg src={'/avatars/message.png'}  alt="titleicon" width={28} height={28} />
                      <h5 style={{width: "200px" ,marginLeft : "20px" ,fontFamily :'sans-serif'}}>Email </h5>
                      <h5  style={{width: "200px" ,fontFamily :'sans-serif'}}>:{data.email}</h5>
                    </div>
                    <div style={{display: 'flex'}}>
                      <CImg src={'/avatars/career.png'}  alt="titleicon" width={28} height={28} />
                      <h5 style={{width: "200px" ,marginLeft : "20px" ,fontFamily :'sans-serif'}}>Career </h5>
                      <h5  style={{width: "200px" ,fontFamily :'sans-serif'}}>:{data.career}</h5>
                    </div>
                    <div style={{display: 'flex'}}>
                      <CImg src={'/avatars/smartphone.png'}  alt="titleicon" width={28} height={28} />
                      <h5 style={{width: "200px" ,marginLeft : "20px",fontFamily :'sans-serif'} }>Phone </h5>
                      <h5  style={{width: "200px",fontFamily :'sans-serif'}}>:{data.phone}</h5>
                    </div>
                    <div style={{display: 'flex'}}>
                      <CImg src={'/avatars/smartphone.png'}  alt="titleicon" width={28} height={28} />
                      <h5 style={{width: "200px" ,marginLeft : "20px",fontFamily :'sans-serif'} }>Age </h5>
                      <h5  style={{width: "200px",fontFamily :'sans-serif'}}>:{data.age}</h5>
                    </div>
                 
                </div>
                 <hr/>
                 </div>
            )})}
             */}


          {/* </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  ) */}
// }

export default SubMenu
