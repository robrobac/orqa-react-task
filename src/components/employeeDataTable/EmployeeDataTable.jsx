import './employeeDataTable.scss';

import EmployeeDataTableRow from "./EmployeeDataTableRow";
import useFetchEmployeeData from "../../hooks/useFetchEmployeeData";
import TableRowPlaceholder from "./tableRowPlaceholder/TableRowPlaceholder";

export default function EmployeeDataTable() {
    const {data, employees, search, handleSearch, ref} = useFetchEmployeeData();

    return (
        <div className="employeeDataTableContainer">
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
                            <EmployeeDataTableRow key={index} employee={employee} />
                        ))}  
                        {employees.length !== data.total && <TableRowPlaceholder/>}
                        <tr className="inViewReference" ref={ref}></tr>
                    </tbody>
                    
                </table>
            </div>
        </div>
    )
}
