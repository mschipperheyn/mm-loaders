import React from 'react';
import styled from 'styled-components';
import MDSpinner from '../../src/components/MDSpinner';

const FlexBox = styled.div`
    height:100vh;
    display: flex;
`;

const Row = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    flex-grow: 1;
`;

const Col = styled.div`
    width: 33.33%;
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding: 20px;
`;

const P = styled.p`
    font-family: Arial, Helvetica;
    font-weight: bold;
    margin-bottom: 8px;
`;

const Spinner = () => {
    return (
        <FlexBox>
            <Row>
                <Col>
                    <P>Default</P>
                    <MDSpinner/>
                </Col>
                <Col>
                    <P>Width: 100, Height: 100</P>
                    <MDSpinner
                        width={100}
                        height={100}
                    />
                </Col>
                <Col>
                    <P>BorderWidth: 10</P>
                    <MDSpinner
                        borderWidth={10}
                    />
                </Col>
                <Col>
                    <P>Colors: ['red', 'red', 'red', 'red', 'red']</P>
                    <MDSpinner
                        colors={['red', 'red', 'red', 'red', 'red']}
                    />
                </Col>
            </Row>
        </FlexBox>
    )
};

export default Spinner;
