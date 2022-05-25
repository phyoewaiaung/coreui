import React from "react";

const Form =(props)=> {
    let {idValue,nameValue,emailValue,phoneValue,AddingData,
        idValueChange,nameValueChange,emailValueChange,phoneValueChange} = props;
    return (
        <div>
            <div className="formStyle">
                <div>
                <label>ID</label>
                <div><input type="text" value={idValue} onChange={idValueChange } /></div>
                </div>
                <div>
                <label>Name</label>
                <div><input type="text" value={nameValue} onChange={nameValueChange } /></div>
                </div>
                <div>
                <label>Email</label>
                <div><input type="text" value={emailValue} onChange={emailValueChange } /></div>
                </div>
                <div>
                <label>Phone Number</label>
                <div><input type="text" value={phoneValue} onChange={phoneValueChange } /></div>
                </div>
            </div>
                <div  className="addBtn">
                <button className="button" onClick={AddingData}>Add</button>
                </div>
        </div>
    )
}
export default Form;