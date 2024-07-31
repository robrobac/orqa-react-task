import EmployeeDataTable from "../../components/employeeDataTable/EmployeeDataTable";
import Header from "../../components/header/Header";

export default function Employees() {
    return (
        <>
            <Header currentPage={"employees"}/>
            <main>
                <EmployeeDataTable />
            </main>
            
        </>
    )
}
