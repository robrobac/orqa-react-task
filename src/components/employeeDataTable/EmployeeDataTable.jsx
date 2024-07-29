import useFetchEmployeeData from "../../hooks/useFetchEmployeeData";
import EmployeeDataTableRow from "./EmployeeDataTableRow";

export default function EmployeeDataTable() {
    const {data, isLoading, error} = useFetchEmployeeData();

    const employees = data?.data || [];
    console.log(employees)
    
    return (
        <table>
            <caption>Table 1</caption>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Image</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Position</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {isLoading ? 
                    (<tr><td>loading...</td></tr>) 
                    : 
                    (employees.map((employee, index) => (
                        <EmployeeDataTableRow key={index} employee={employee} />
                    )))
                }
            </tbody>
        </table>
    )
}
