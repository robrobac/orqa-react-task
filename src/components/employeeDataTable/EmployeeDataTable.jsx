import EmployeeDataTableRow from "./EmployeeDataTableRow";
import useFetchEmployeeData from "../../hooks/useFetchEmployeeData";

export default function EmployeeDataTable() {
    const {isLoading, error, employees, search, handleSearch, ref} = useFetchEmployeeData();

    return (
        <>
            <input type="search" value={search} onChange={handleSearch} />
            <table className="employeeDataTable">
                <caption>Table 1</caption>
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
                </tbody>
                
            </table>
            {isLoading && <div ref={ref}>LOADING</div>}
            {!isLoading && !error && search === "" && <div ref={ref}>aaaaaa</div>}
        </>
    )
}
