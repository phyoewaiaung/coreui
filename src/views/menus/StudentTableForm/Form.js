import React from "react";

const Form = (props) => {
    let {id,name,email,phone,idChange,nameChange,emailChange,phoneChange,addClick} = props;
    return (
        <div>
            <div className="StudentFormStyle">
                <div>
                    <label>ID</label>
                    <div><input type="text" value={id} onChange={idChange} ></input></div>
                </div>
                <div>
                    <label>Name</label>
                    <div><input type="text" value={name} onChange={nameChange} ></input></div>
                </div><div>
                    <label>Email</label>
                    <div><input type="text" value={email} onChange={emailChange}></input></div>
                </div><div>
                    <label>Phone</label>
                    <div><input type="text"value={phone} onChange={phoneChange}></input></div>
                </div>
            </div>
            <div className="text-center">
                <button className="StudentAddBtn mt-4 mb-4" onClick={addClick}>Add</button>
            </div>
        </div>
    )
}

export default Form