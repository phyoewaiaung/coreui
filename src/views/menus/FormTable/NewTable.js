import React from "react";

const NewTable = (props) => {
    let {resultArray} = props;
    return (
        <div>
            {
            resultArray.length > 0 && 
                <table className="table table-bordered mt-3">
                    <thead style={{textAlign:"center"}}>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        {
                            resultArray.map((data,index) =>{
                                return (
                                    <>
                                        <td>{data.id}</td>
                                        <td>{data.name}</td>
                                        <td>{data.email}</td>
                                        <td>{data.phone}</td>
                                        <td>{data.des}</td>
                                    </>
                                )
                            })
                        }
                        </tr>
                    </tbody>
                </table>

            }

        </div>
    )
}

export default NewTable;