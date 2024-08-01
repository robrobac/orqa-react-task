/* eslint-disable react/prop-types */
import { OrganizationChart } from 'primereact/organizationchart';
import { useEffect } from 'react'
import ProfileImg from '../../profileImg/ProfileImg';
import useDragScroll from '../../../hooks/useDragScroll';

export default function Chart({data}) {
    const {containerRef: dragContainerRef, handleMouseDown, handleMouseLeave, handleMouseUp, handleMouseMove} = useDragScroll();

    const nodeTemplate = (node) => {
        return (
            <div className="personNode" id={node?.id === 1 ? 'firstNode' : ''}>
                <ProfileImg  employee={node}/>
                <p className="nodeName">{node?.label}</p>
                <p className="nodePosition">{node?.position}</p>
            </div>
        );
    };

    useEffect(() => {
        const firstNode = document.getElementById('firstNode');
        if (firstNode) {
            firstNode.scrollIntoView({top: -100, behavior: 'instant', inline: 'center' })
        }
    }, [data])

    return (
        <div
            className="orgChartContainer"
            ref={dragContainerRef}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
        >
            <OrganizationChart value={data} nodeTemplate={nodeTemplate} className="orgChart"/>
        </div>
    )
}
