import ProfileImg from "../profileImg/ProfileImg";

const nodeTemplate = (node) => {
    return (
        <div className="personNode" id={node?.id === 1 ? 'firstNode' : ''}>
            <ProfileImg  employee={node}/>
            <p className="nodeName">{node?.label}</p>
            <p className="nodePosition">{node?.position}</p>
        </div>
    );
};

const dummyNodeTemplate = (node) => {
    return (
        <div className="personNode personNodePlaceholder" id={node?.id === 1 ? 'firstNodePlaceholder' : ''}>
            <div className="nodeImage loadingImage"></div>
            <p className="nodeName loadingText">{node?.label}</p>
            <p className="nodePosition loadingText">{node?.position}</p>
        </div>
    );
};

export {
    nodeTemplate, dummyNodeTemplate
}