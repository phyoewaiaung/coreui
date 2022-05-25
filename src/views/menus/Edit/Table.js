import React from "react";
import { CImg } from "@coreui/react";

const Table = (props) => {

    let {dataArray,detailClick} = props;
    return (
        <div className="wholePageBg">
        <table className="table table-striped table-bordered">
            <thead style={{textAlign:"center"}}>
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
                        dataArray.map((data,index) => {
                            return (
                                <tr key={index} style={{textAlign:"center"}}>
                                <td>{data.id}</td>
                                <td>{data.name}</td>
                                <td>{data.email}</td>
                                <td>{data.phone}</td>
                                <td>
                                <CImg data-coreui-toggle="tooltip" data-coreui-placement="top" title="Your Details" className="detailBtn" src={'/avatars/save.png'}  alt="titleicon" width={28} height={28} 
                                onClick={()=>detailClick(data)}/>
                                </td>
                                </tr>
                            )
                        })
                    }
            </tbody>
       </table>
        </div>
    )
}

export default Table