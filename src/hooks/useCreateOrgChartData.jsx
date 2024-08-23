import { useState, useEffect } from "react";

export default function useCreateOrgChartData() {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const hierarchy = (dataToProcess) => {
        // console.log("ULAZNO:", data)
        let hierarchyTree = []
        let employeesMap = {}

        // create a map of all employees with fields needed for organizational chart
        dataToProcess.forEach(employee => {
            employeesMap[employee.id] = {
                label: employee.firstName + " " + employee.lastName,
                firstName: employee.firstName,
                lastName: employee.lastName,
                position: employee.position,
                imageUrl: employee.imageUrl,
                id: employee.id,
                type: "person",
                className: "p-person",
                expanded: true,
                children: []
            }
        })
        
        dataToProcess.forEach(employee => {
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
        return hierarchyTree
    };

    useEffect(() => {
        const fetchAllData = async () => {
            setIsLoading(true);
            let page = 1;
            let baseUrl = import.meta.env.VITE_API_PATH;
            let fetchUrl = `${baseUrl}?page=${page}`;
            let allData = [];
            

            try {

                // fetch employees page by page untill next page is null
                while (page) {
                    const response = await fetch(fetchUrl);
                    const json = await response.json();

                    allData = [...allData, ...json.data];

                    if (json.next_page_url) {
                        page += 1;
                        fetchUrl = json.next_page_url;
                    } else {
                        page = null;
                    }
                }

                // sort the employees by manager id
                allData.sort((a, b) => { return a.manager_id - b.manager_id} )

                // process sorted employees and create hierarchy data for organizational chart
                const hierarchyData = hierarchy(allData);

                setData(hierarchyData);
            } catch (err) {
                setError(err.message);
            } finally {
                setIsLoading(false);
            }
        };

        fetchAllData();
    }, []);


    return {
        data,
        isLoading,
        error
    };
}