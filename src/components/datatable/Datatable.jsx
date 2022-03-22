import "./datatable.scss"
import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import {userRows, userColumns} from "../../datatablesource";
import {Link} from "react-router-dom";


const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

const Datatable = () => {

    const actionColumn = [
        { field: "action", headerName: "Action", width: 200, renderCell: () => {
            return (
                <div className="cellAction">
                    <Link to="/users/test" style={{textDecoration:"none"}}>
                        <div className="viewButton">View</div>
                    </Link>
                    <div className="deleteButton">Delete</div>
                </div>
            ) } }
    ];

    return (
        <div className="datatable">
            <div className="datatableTitle">
                Add New User
                <Link to="/users/new" className="link">
                    Add New
                </Link>
            </div>
            <DataGrid
                className="datagrid"
                rows={userRows}
                columns={userColumns.concat(actionColumn)}
                pageSize={9}
                rowsPerPageOptions={[9]}
                checkboxSelection
            />
        </div>
    );
}
export default Datatable