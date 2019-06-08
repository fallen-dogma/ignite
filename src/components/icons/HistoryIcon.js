import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';
import IconButton from '@material-ui/core/IconButton';
import styled from 'styled-components';

function HistoryIcon(props) {

	return (
		<IconButton onClick={props.onClick}>
			<SvgIcon>
				<SVGContainer>
					<path d="M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z"/>
				</SVGContainer>
			</SvgIcon>
		</IconButton>
	);
}

const SVGContainer = styled.svg`
	fill: #757575;
	margin-right: 36px;
`;

export default HistoryIcon;