import React from 'react';
import styled from 'styled-components';

import Flame from '../components/Flame/Flame';
import mockData from '../data/graph';

class Center extends React.Component {

	render() {
		return (
			<CenterContainer>
				<Flame nodeData={mockData[0]} />
			</CenterContainer>
		);
	}
}

const CenterContainer = styled.div`
	position: absolute;
	margin-left: auto;
	margin-right: auto;
	left: 0;
	right: 0;
`;

export default Center;