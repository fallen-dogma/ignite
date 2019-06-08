import React from 'react';

import { ForceGraph2D } from 'react-force-graph';

class FocusGraph extends React.Component {
	static NODE_R = 8;
	state = {
	  data: this.props.data,
	  highlightNodes: [],
	  highlightLink: null
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
	  // add ring just for highlighted nodes
	  ctx.beginPath();
	  ctx.arc(node.x, node.y, NODE_R * 1.4, 0, 2 * Math.PI, false);
	  ctx.fillStyle = 'red';
	  ctx.fill();
	};
	  
	render() {
	  const { NODE_R } = FocusGraph;
	  const { data, highlightNodes, highlightLink } = this.state;
	  return <ForceGraph2D
		ref={el => { this.fg = el; }}
		graphData={data}
		nodeRelSize={NODE_R}
		linkWidth={link => link === highlightLink ? 5 : 1}
		linkDirectionalParticles={4}
		linkDirectionalParticleWidth={link => link === highlightLink ? 4 : 0}
		nodeCanvasObjectMode={node => highlightNodes.indexOf(node) !== -1 ? 'before' : undefined}
		nodeCanvasObject={this._paintRing}
		onNodeHover={this._handleNodeHover}
		onLinkHover={this._handleLinkHover}
		onNodeClick={node => console.log(node)}
	  />;
	}
  }

export default FocusGraph;