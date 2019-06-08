import React from 'react';
import PropTypes, { node } from 'prop-types';
import styled from 'styled-components';

import './Flame.css';
import ReactTooltip from 'react-tooltip'

class Flame extends React.Component {
    static propTypes = {
        nodeData: PropTypes.object.isRequired
    }

    render() {
        const { nodeData } = this.props;
        const { title } = nodeData;

        return (
            <div class="wrapper">
                <FlameContainer className='flame-wrapper' data-tip={title}>
                    <div className='flame red' ></div>
                    <div className='flame orange'></div>
                    <div className='flame gold'></div>
                    <div className='flame white'></div>
                </FlameContainer>
                <ReactTooltip place='right' type='light' offset={{top: 10, right: 30 }} />
            </div>
        );
    }
}

const FlameContainer = styled.div`
    position: absolute;
    :hover {
        cursor: pointer;
		animation: flicker 1.5s ease-in infinite;
	};
`;

export default Flame;