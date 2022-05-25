import React from "react";
import { CImg } from "@coreui/react";

const Table  = (props) => {
    let {resultArray,detailClick} = props;
    return (
        <div>
            {resultArray.length > 0 &&
                <table className="table table-striped table-bordered StudentTableFormStyle">
                    <thead className="text-center">
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Detail</th>
                        </tr>
                    </thead>
                <tbody>
                    {
                    resultArray.map((data,index)=>{
                        return (
                            <tr className="text-center" key={index}>
                                <td>{data.id}</td>
                                <td>{data.name}</td>
                                <td>{data.email}</td>
                                <td>{data.phone}</td>
                                <td>
                                    <CImg data-coreui-toggle="tooltip" data-coreui-placement="top" title="Your Details" className="detailBtn" src="./avatars/info.png" width={28} height={28} onClick={()=>detailClick(data)}/>
                                </td>
                            </tr>
                        )
                    })
                    }
                </tbody>
                </table>
            }
        </div>
    )
}

export default Table