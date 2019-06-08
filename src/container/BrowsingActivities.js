import React from 'react';

import { ForceGraph2D } from 'react-force-graph';

class FocusGraph extends React.Component {
	static NODE_R = 8;

	state = {
		data: this.props.data,
		highlightNodes: [],
		highlightLink: null,
		isHover: false
	};

	_handleClick = node => {
		// Aim at node from outside it
		const distance = 40;
		const distRatio = 1 + distance / Math.hypot(node.x, node.y, node.z);
		this.fg.cameraPosition(
			{ x: node.x * distRatio, y: node.y * distRatio, z: node.z * distRatio }, // new position
			node, // lookAt ({ x, y, z })
			3000  // ms transition duration
		);
	};

	_handleNodeHover = node => {
		this.setState({ highlightNodes: node ? [node] : [] });
	};

	_handleLinkHover = link => {
		this.setState({
			highlightLink: link,
			highlightNodes: link ? [link.source, link.target] : []
		});
	};

	_paintRing = (node, ctx) => {
		const { NODE_R } = FocusGraph;

		ctx.beginPath();
		ctx.arc(node.x, node.y, NODE_R * 1.4, 0, 2 * Math.PI, false);
		ctx.fillStyle = 'red';
		ctx.fill();
	};

	render() {
		const { data, highlightNodes, highlightLink } = this.state;
		return <ForceGraph2D style={style}
			ref={el => { this.fg = el; }}
			graphData={data}
			linkWidth={link => link === highlightLink ? 5 : 1}
			linkDirectionalParticles={4}
			linkDirectionalParticleWidth={link => link === highlightLink ? 4 : 0}
			nodeCanvasObjectMode={node => highlightNodes.indexOf(node) !== -1 ? 'before' : undefined}
			nodeCanvasObject={this._paintRing}
			onNodeHover={this._handleNodeHover}
			onLinkHover={this._handleLinkHover}
			onNodeClick={this._handleClick}
		/>;
	}
}

const style = {
	width: 439
}

export default FocusGraph;