import React from 'react';
import styled from 'styled-components';

import './Flame.css';

class Flame extends React.Component {
    render() {
        return (
            <div class="wrapper">
                <FlameContainer className='flame-wrapper'>
                    <div className='flame red'></div>
                    <div className='flame orange'></div>
                    <div className='flame gold'></div>
                    <div className='flame white'></div>
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