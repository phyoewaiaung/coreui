import React from "react";

const UserRegister = (props) => {
    return (
        <div className="user-register">
            <h1>User Registration</h1>
            <div className="textStyle"> <label style={{marginRight:41}}>Username</label>
                <input type = "text" value={props.userName} onChange={props.userNameChange}/>
            </div>
            <div className="textStyle"> <label style={{marginRight:40}}>Full Name</label>
                <input type = "text" value={props.fullName} onChange={props.fullNameChange}/>
            </div>
            <div className="textStyle"> <label  style={{marginRight:70}}>Email</label>
                <input type = "text" value={props.email} onChange={props.emailChange}/>
            </div>
            <div className="textStyle"> <label style={{marginRight:67}}>Ph no</label>
                <input type = "text" value={props.phone} onChange = {props.phoneNoChange}/>
            </div>
            <div className="textStyle"> <label  style={{marginRight:53}}>Address</label>
                <textarea style={{width:167}} value={props.address} onChange = {props.addressChange}/>
            </div>
        </div>
    )
}

export default UserRegister;