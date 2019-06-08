import React from 'react';
import styled from 'styled-components';

import './Flame.css';

class Flame extends React.PureComponent {
    render() {
        return (
                <FlameContainer className='flame-wrapper'>
                    <div className='flame red' ></div>
                    <div className='flame orange'></div>
                    <div className='flame gold'></div>
                    <div className='flame white'></div>
                </FlameContainer>
        );
    }
}

const FlameContainer = styled.div`
    margin-right: 5px;
    margin-bottom: 5px;
    display: inline-block;
    height: 24px;
    width: 24px;
    animation: flicker .5s ease-in infinite;
`;

export default Flame;