import React from "react";

const Table = (props) => {
    return (
        <div>
            <table className="table table-bordered">
                <tbody>
                <tr>
                    <th>UserName</th>
                    <th>FullName</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Address</th>
                </tr>
                <tr>
                    <td>{props.tableUsername}</td>
                    <td>{props.tableFullName}</td>
                    <td>{props.tableEmail}</td>
                    <td>{props.tablePhone}</td>
                    <td>{props.tableAddress}</td>
                </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Table;