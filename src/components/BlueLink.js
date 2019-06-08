import React from 'react';
import styled from 'styled-components';

class BlueLink extends React.Component {
	render() {
		return (
			<BlueLinkContainer />
		);
	}
}

const BlueLinkContainer = styled.a`
	color: 03A9F4;
`;

export default BlueLink;