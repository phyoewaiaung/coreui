import React from "react";

const Detail = (props) =>{

    let {detailData,resetClick} = props;

    return(
        <div className="text-center">
        <h1>Your Details</h1><hr />
        {/* <ul >
            <li>ID:{detailData.id}</li>
            <li>Name:{detailData.name}</li>
            <li>Email:{detailData.email}</li>
            <li>Phone:{detailData.phone}</li>
        </ul> */}
        <div className="detailStyle">
       <div>
                <label className="w-25 ">ID</label>
                <input type="text" value={detailData.id} />
                </div>
                <div>
                <label className="w-25">Name</label>
                <input type="text" value={detailData.name}  />
                </div>
                <div>
                <label className="w-25">Email</label>
                <input type="text" value={detailData.email} />
                </div>
                <div>
                <label className="w-25">Phone Number</label>
                <input type="text" value={detailData.phone} />
                </div>
        </div>
        <div>
            <button className="resetBtn mt-4 mb-3" onClick={resetClick} >Reset</button>
        </div>
        </div>
    )
}

export default Detail