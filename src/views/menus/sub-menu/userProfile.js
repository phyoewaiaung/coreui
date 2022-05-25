import React from "react";

const UserProfile = (props) => {
    return (
        <div className="user-profile">
            <h1>User Profile </h1>
            <div className="textStyle">Username: {props.userName}</div>
            <div className="textStyle">Full Name: {props.fullName}</div>
            <div className="textStyle">Email: {props.email}</div>
            <div className="textStyle">Ph no: {props.phone}</div>
            <div className="textStyle">Address:{props.address}</div>
            
        </div>
    )
}

export default UserProfile;