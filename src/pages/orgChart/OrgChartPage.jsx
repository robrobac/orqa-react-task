import Header from "../../components/header/Header";
import OrgChart from "../../components/orgChart/OrgChart";


export default function OrgChartPage() {
    return (
        <>
            <Header currentPage={"orgChart"}/>
            <main className="orgChartMain">
                <OrgChart />
            </main>
            
        </>
    )
}
