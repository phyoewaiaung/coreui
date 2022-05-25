import { cilRestaurant } from "@coreui/icons";
import React from "react";
import {
  
  CCard,
  CCardBody,
  CCardHeader,

  CCol,
  CRow,
  CLabel,
  CImg
} from '@coreui/react'

const Table = (props) => {
    return (
        <div className="marginBot">
            <table className="table table-bordered">
                <thead  style={{textAlign:"center"}}>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                {
                props.tableArray.map((data,index)=>{
                    return (

                        <tr key={index}>
                            <td>{data.id}</td>
                            <td>{data.name}</td>
                            <td>{data.email}</td>
                            <td>{data.phone}</td>
                            <td>
                               <CImg  src={'/avatars/del.png'}  width={28} height={28} onClick={()=>props.remove(data.id)} />
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

export default Table;