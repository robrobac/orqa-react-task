import { OrganizationChart } from "primereact/organizationchart"
import './orgChartPlaceholder.scss';

export default function OrgChartPlaceholder() {
    const dummyData = [
        {
            label: "Name Surname",
            id: 1,
            position: "Position",
            className: "p-person",
            expanded: true,
            type: "person",
            children: [
                {
                    label: "Name Surname",
                    id: 2,
                    position: "Position",
                    className: "p-person",
                    expanded: true,
                    type: "person",
                    children: [
                        {
                            label: "Name Surname",
                            id: 4,
                            position: "Position",
                            className: "p-person",
                            expanded: true,
                            type: "person",
                            children: []
                        },
                        {
                            label: "Name Surname",
                            id: 5,
                            position: "Position",
                            className: "p-person",
                            expanded: true,
                            type: "person",
                            children: []
                        }
                    ]
                },
                {
                    label: "Name Surname",
                    id: 3,
                    position: "Position",
                    className: "p-person",
                    expanded: true,
                    type: "person",
                    children: [
                        {
                            label: "Name Surname",
                            id: 6,
                            position: "Position",
                            className: "p-person",
                            expanded: true,
                            type: "person",
                            children: []
                        },
                        {
                            label: "Name Surname",
                            id: 7,
                            position: "Position",
                            className: "p-person",
                            expanded: true,
                            type: "person",
                            children: []
                        }
                    ]
                }
            ]
        }
    ]


    const nodeTemplate = (node) => {
        return (
            <div className="personNode personNodePlaceholder" id={node?.id === 1 ? 'firstNodePlaceholder' : ''}>
                <div className="nodeImage loadingImage"></div>
                <p className="nodeName loadingText">{node?.label}</p>
                <p className="nodePosition loadingText">{node?.position}</p>
            </div>
        );
    };

    return (
        <div className="orgChartContainer orgChartContainerPlaceholder">
            <OrganizationChart value={dummyData} nodeTemplate={nodeTemplate} className="orgChart orgChartPlaceholder"/>
        </div>
    )
}
