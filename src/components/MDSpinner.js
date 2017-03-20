import React, { PropTypes } from 'react';
import styled, { keyframes } from 'styled-components';

const offset = 187;
const duration = 1.4;

const rotator = keyframes`
    0% { transform: rotate(0deg); }
    100% { transform: rotate(270deg); }
`;

const colors = (props) => {
    return keyframes`
    	0% { stroke: ${props.colors[0]}; }
    	25% { stroke: ${props.colors[1]}; }
    	50% { stroke: ${props.colors[2]}; }
    	75% { stroke: ${props.colors[3]}; }
        100% { stroke: ${props.colors[4]}; }
    `;
}

const dash = keyframes`
    0% { stroke-dashoffset: ${offset}; }
    50% {
        stroke-dashoffset: ${offset / 4};
        transform:rotate(135deg);
    }
    100% {
        stroke-dashoffset: ${offset};
        transform:rotate(450deg);
    }
`;

const SpinnerRotate = styled.svg`
  animation: ${rotator} ${duration}s linear infinite;
`;

const SpinnerPath = styled.circle`
  stroke-dasharray: ${offset};
  stroke-dashoffset: 0;
  transform-origin: center;
  animation:
    ${dash} ${duration}s ease-in-out infinite,
    ${colors} ${duration * 4}s ease-in-out infinite;
`;

const Spinner = ({ colors, width, height, borderWidth }) => {
    return (
        <SpinnerRotate
            width={`${width}px`}
            height={`${height}px`}
            viewBox={`0 0 ${width+1} ${height+1}`}
            xmlns="http://www.w3.org/2000/svg"
        >
            <SpinnerPath
                fill="none"
                strokeWidth={borderWidth}
                strokeLinecap="round"
                cx={(width+1)/2}
                cy={(height+1)/2}
                r={(width - borderWidth) / 2}
                colors={colors}/>
        </SpinnerRotate>
    );
}

Spinner.propTypes = {
    colors : PropTypes.array,
    width : PropTypes.number,
    height : PropTypes.number,
    borderWidth : PropTypes.number,
};

Spinner.defaultProps = {
    colors: ['#4285F4', '#DE3E35', '#F7C223', '#1B9A59', '#4285F4'],
    width: 65,
    height: 65,
    borderWidth : 6,
};

export default Spinner;
