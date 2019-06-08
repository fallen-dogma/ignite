import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';
import IconButton from '@material-ui/core/IconButton';
import styled from 'styled-components';

function DashBoardIcon(props) {

	return (
		<IconButton onClick={props.onClick}>
			<SvgIcon>
				<SVGContainer>
					<path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"/>
				</SVGContainer>
			</SvgIcon>
		</IconButton>
	);
}

const SVGContainer = styled.svg`
	fill: #757575;
`;

export default DashBoardIcon;