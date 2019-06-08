import React from 'react';

import { ForceGraphVR } from 'react-force-graph';

class FocusGraph extends React.Component {
	_handleClick = node => {
		console.log(node);
		const distance = 40;
		const distRatio = 1 + distance / Math.hypot(node.x, node.y, node.z);
		this.fg.cameraPosition(
			{ x: node.x * distRatio, y: node.y * distRatio, z: node.z * distRatio }, // new position
			node, // lookAt ({ x, y, z })
			3000  // ms transition duration
		);
	};
	render() {
		const { data } = this.props;
		return (
			<ForceGraphVR
				graphData={data}
				nodeLabel={node => `${node.user}: ${node.description}`}
				nodeAutoColorBy="user"
				linkDirectionalParticles={1}
			/>
		);
	}
}

export default FocusGraph;