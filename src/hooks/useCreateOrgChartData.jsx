import { useState, useEffect } from "react";

export default function useCreateOrgChartData() {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [hierarchyData, setHierarchyData] = useState([]);

    useEffect(() => {
        const fetchAllData = async () => {
            setIsLoading(true);
            let baseUrl = import.meta.env.VITE_API_PATH;
            let allData = [];
            let page = 1;

            try {
                while (page) {
                    const response = await fetch(`${baseUrl}?page=${page}`);
                    const json = await response.json();

                    allData = [...allData, ...json.data];

                    if (json.next_page_url) {
                        page += 1;
                    } else {
                        page = null;
                    }
                }

                allData.sort((a, b) => { return a.manager_id - b.manager_id} )
                setData(allData);
            } catch (err) {
                setError(err.message);
            } finally {
                setIsLoading(false);
            }
        };

        fetchAllData();
    }, []);


    useEffect(() => {
        const hierarchy = (data) => {
            // console.log("ULAZNO:", data)
            let hierarchyTree = []
            let employeesMap = {}
    
            // create a map of all employees with fields needed for organisational chart
            data.forEach(employee => {
                employeesMap[employee.id] = {
                    label: employee.firstName + " " + employee.lastName,
                    position: employee.position,
                    type: "person",
                    className: "p-person",
                    expanded: true,
                    children: []
                }
            })
            
            data.forEach(employee => {
                if (!employee.manager_id) {
                    // no manager = CEO
                    hierarchyTree.push(employeesMap[employee.id])
                } else {
                    // Adding children to manager
                    if (employeesMap[employee.manager_id]) {
                        employeesMap[employee.manager_id].children.push(employeesMap[employee.id])
                    }
                }
            })
    
            // console.log("IZLAZNO:", hierarchyTree)
            setHierarchyData(hierarchyTree)
        };
    
        hierarchy(data);
    }, [data])


    return {
        data,
        isLoading,
        error,
        hierarchyData
    };
}