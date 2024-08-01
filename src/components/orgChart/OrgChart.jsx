import useCreateOrgChartData from "../../hooks/useCreateOrgChartData";
import './orgChart.scss';
import Chart from "./chart/Chart";
import OrgChartPlaceholder from "./orgChartPlaceholder/OrgChartPlaceholder";
import OrgChartDialog from "./orgChartDialog/OrgChartDialog";

export default function OrgChart() {
    const { data, isLoading } = useCreateOrgChartData();

    if (isLoading) {
        return <OrgChartPlaceholder />
    } else {
        return (
            <>
                <Chart data={data} />
                <OrgChartDialog />
            </>
        )
    } 
}
