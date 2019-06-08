import React from 'react';
import styled from 'styled-components';

import './Flame.css';

class Flame extends React.Component {
    render() {
        return (
            <div class="wrapper">
                <FlameContainer className='flame-wrapper'>
                    <div class="flame red"></div>
                    <div class="flame orange"></div>
                    <div class="flame gold"></div>
                    <div class="flame white"></div>
                </FlameContainer>
            </div>
        );
    }
}

const FlameContainer = styled.div`
    position: relative;
    :hover {
        cursor: pointer;
		animation: flicker 1.5s ease-in infinite;
	};
`;

export default Flame;