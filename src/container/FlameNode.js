import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Flame from '../components/Flame/Flame.js';

class FlameNode extends React.Component {
	render() {
		return (
			<Container>
				<Flame />
			</Container>
		);
	}
}

const Container = styled.div`
	margin-top: 200px;
`;

export default FlameNode;