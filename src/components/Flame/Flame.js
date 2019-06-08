import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import './Flame.css';
import ReactTooltip from 'react-tooltip'

class Flame extends React.Component {
    static propTypes = {
        nodeData: PropTypes.object.isRequired
    }

    renderIcon() {
        const { nodeData } = this.props;
        const { faviconUrl } = nodeData;

        console.log({
            background: faviconUrl
        })
        return {
            background: `url(${faviconUrl}) 2px 2px/30px`
        }
    }

    render() {
        const { nodeData } = this.props;
        const { title, count } = nodeData;

        return (
                <FlameContainer className='flame-wrapper' data-tip={title}>
                    <div className='flame red' ></div>
                    <div className='flame orange'></div>
                    <div className='flame gold'></div>
                    <div className='flame white' style={this.renderIcon()}></div>
                    <ReactTooltip place='right' type='light' offset={{top: 10, right: 30 }} />
                    <VisitedTimes>最近访问 {count} 次</VisitedTimes>
                </FlameContainer>
        );
    }
}

const FlameContainer = styled.div`
    position: absolute;
    :hover {
        cursor: pointer;
		animation: flicker .5s ease-in infinite;
    };
`;

const VisitedTimes = styled.div`
    font-size: 14px;
    color: #666666;
    position: absolute;
    left: 0;
    top: 15px;
    white-space: nowrap;
    :hover {
        color: white;
    }
`;

export default Flame;