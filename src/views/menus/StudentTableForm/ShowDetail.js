import React from "react";

const ShowDetail = (props) =>{
    let {showArray,resetClick} = props;
    return (
        <div className="text-center">
            <h1 className="mb-4">Your Details</h1>
            <div className="showDetailStyle">
                <div>
                    <label className="w-25">Id</label>:
                    <input type="text" value={showArray.id} ></input>
                </div>
                <div>
                    <label className="w-25">Name</label>:
                    <input type="text" value={showArray.name} ></input>
                </div>
                <div>
                    <label className="w-25">Email</label>:
                    <input type="text" value={showArray.email} ></input>
                </div>
                <div>
                    <label className="w-25">Phone</label>:
                    <input type="text" value={showArray.phone}></input>
                </div>
            </div>
            <div className="text-center">
                <button className="resetClickBtn mt-4 mb-4" onClick={resetClick}>Reset</button>
            </div>
        </div>
    )
}

export default ShowDetail