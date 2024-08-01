import { OrganizationChart } from "primereact/organizationchart"
import './orgChartPlaceholder.scss';
import { dummyNodeTemplate } from "../nodeTemplates";
import dummyData from "../../../assets/dummyData";

export default function OrgChartPlaceholder() {

    return (
        <div className="orgChartContainer orgChartContainerPlaceholder">
            <OrganizationChart value={dummyData} nodeTemplate={dummyNodeTemplate} className="orgChart orgChartPlaceholder"/>
        </div>
    )
}
