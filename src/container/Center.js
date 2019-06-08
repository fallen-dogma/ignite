import React from 'react';
import styled from 'styled-components';

import FlameNode from './FlameNode';

class Center extends React.Component {
	render() {
		return (
			<CenterContainer>
				<FlameNode />
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