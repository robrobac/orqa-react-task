/* eslint-disable react/prop-types */
import { OrganizationChart } from 'primereact/organizationchart';
import { useEffect } from 'react'
import useDragScroll from '../../../hooks/useDragScroll';
import { nodeTemplate } from '../nodeTemplates';

export default function Chart({data}) {
    const {containerRef: dragContainerRef, handleMouseDown, handleMouseLeave, handleMouseUp, handleMouseMove} = useDragScroll();



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
