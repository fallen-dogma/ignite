import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';
import IconButton from '@material-ui/core/IconButton';
import styled from 'styled-components';

function ExportImportIcon(props) {

	return (
		<IconButton onClick={props.onClick}>
			<SvgIcon>
				<SVGContainer>
					<path d="M9 3L5 6.99h3V14h2V6.99h3L9 3zm7 14.01V10h-2v7.01h-3L15 21l4-3.99h-3z"/>
				</SVGContainer>
			</SvgIcon>
		</IconButton>
	);
}

const SVGContainer = styled.svg`
	fill: #757575;
`;

export default ExportImportIcon;