import './employeeDataTable.scss';

import EmployeeDataTableRow from "./EmployeeDataTableRow";
import useFetchEmployeeData from "../../hooks/useFetchEmployeeData";
import TableRowPlaceholder from "./tableRowPlaceholder/TableRowPlaceholder";
import EmployeeDetails from './EmployeeDetails/EmployeeDetails';
import { useState } from 'react';

export default function EmployeeDataTable() {
    const {data, employees, search, handleSearch, ref} = useFetchEmployeeData();
    const [detailsModalIsOpen, setDetailsModalIsOpen] = useState(false);
    const [singleEmployeeData, setSingleEmployeeData] = useState(null);

    // Getting single employee data from the EmployeeDataTableRow component and opens the modal that shows that data
    const handleEmployeeDetailsModal = (state, details) => {
        if (state === "open") {
            setSingleEmployeeData(details);
            setDetailsModalIsOpen(true);
        } else if (state === "close") {
            setSingleEmployeeData(null);
            setDetailsModalIsOpen(false);
        }
    }

    return (
        <div className="employeeDataTableContainer">
            {detailsModalIsOpen && <EmployeeDetails data={singleEmployeeData} modalFunction={handleEmployeeDetailsModal}/>}
            <div className="employeeDataTableSearchContainer">
                <input type="search" value={search} onChange={handleSearch} />
                <button>Export</button>
            </div>
            <div className="employeeDataTableWrapper">
                <table className="employeeDataTable">
                    {/* <caption>Table 1</caption> */}
                    <thead>
                        <tr>
                            <th className="id">#</th>
                            <th className="image">Image</th>
                            <th className="firstName">First Name</th>
                            <th className="lastName">Last Name</th>
                            <th className="email">Email</th>
                            <th className="position">Position</th>
                            <th className="actions"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {employees.map((employee, index) => (
                            <EmployeeDataTableRow key={index} employee={employee} modalFunction={handleEmployeeDetailsModal}/>
                        ))}  
                        {employees.length !== data.total && <TableRowPlaceholder/>}
                        <tr className="inViewReference" ref={ref}></tr>
                    </tbody>
                    
                </table>
            </div>
        </div>
    )
}
