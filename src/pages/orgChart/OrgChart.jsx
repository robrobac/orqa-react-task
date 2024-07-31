import Header from "../../components/header/Header";

import { OrganizationChart } from 'primereact/organizationchart';
import useCreateOrgChartData from "../../hooks/useCreateOrgChartData";

const nodeTemplate = (node) => {
    return (
        <div className="p-person">
            <p>{node?.label}</p>
            <p>{node?.position}</p>
        </div>
    );
};

export default function OrgChart() {
    const {hierarchyData} = useCreateOrgChartData();
    console.log("REAL: ",hierarchyData)

    return (
        <>
            <Header currentPage={"orgChart"}/>
            <main>
                <div className="orgChartContainer">
                    {hierarchyData.length > 0 && <OrganizationChart value={hierarchyData} nodeTemplate={nodeTemplate} className="orgChart"/>}
                    {/* <OrganizationChart value={sampleData} /> */}
                </div>
                
            </main>
            
        </>
    )
}
