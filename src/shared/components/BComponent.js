import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import WA from '../../images/wa.png';

const AppContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: magenta;
`;

const BComponent = () => {
    return <AppContainer >
        <p onClick={() => { alert('hey'); }}>This is Page B <img src={WA} style={{ width: '40px' }} /></p>
        <NavLink to='/'>Go to A</NavLink>
    </AppContainer>;
}

export default BComponent;
