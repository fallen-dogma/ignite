import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';
import IconButton from '@material-ui/core/IconButton';
import styled from 'styled-components';

function AboutIcon(props) {

	return (
		<IconButton onClick={props.onClick}>
			<SvgIcon>
				<SVGContainer>
					<path d="M16 1H2c-.55 0-1 .45-1 1v14c0 .55.45 1 1 1h14c.55 0 1-.45 1-1V2c0-.55-.45-1-1-1zM7 13H5V8h2v5zm3 0H8V5h2v8zm3 0h-2V9h2v4z"/>
				</SVGContainer>
			</SvgIcon>
		</IconButton>
	);
}

const SVGContainer = styled.svg`
	fill: #757575;
`;

export default AboutIcon;