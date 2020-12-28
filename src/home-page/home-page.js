// @flow
import React from 'react';
import {styled} from 'fusion-plugin-styletron-react';

/*
Personally, I want to stylistically display this in  an artistic way.
Maybe the boxes, instead of a table, will be around in a circle.

There could be a little icon in the middle that says "yo", then when you
click the little icon moving spinning clockwise and counter clockwise by 12
degrees at slow intervals. The icon flips over and exposes the website
options that are all organized in circles.
*/

const Wrapper = styled('div', {
    margin: '0 auto',
    padding: '32px 0',
});

const TableWrapper = styled('table', {
    margin: '0 auto',
});

const TitleWrapper = styled('th', {
    fontSize: '32px',
    display: 'flex',
    justifyContent: 'center',
    margin: '0 auto',
});

const RowWrapper = styled('tr', {
});

const BoxWrapper = styled('td', {
    border: '1px black solid',
    width: '150px',
    height: '150px',
});

const HomePage = () => (
    <Wrapper>
        <TitleWrapper> AHHHHHHH </TitleWrapper>
        <TableWrapper>
            <RowWrapper>
                <BoxWrapper>Something else</BoxWrapper>
                <BoxWrapper>Something else</BoxWrapper>
            </RowWrapper>
            <RowWrapper>
                <BoxWrapper>Something else</BoxWrapper>
                <BoxWrapper>Something else</BoxWrapper>
            </RowWrapper>
        </TableWrapper>
    </Wrapper>
);

export default HomePage;
