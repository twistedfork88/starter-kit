import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const AppContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  width: 100%;
  height: 100%;
  font-size: 40px;
  background: linear-gradient(20deg, rgb(219, 112, 147), #daa357);
`;

const AComponent = () => {
    return <AppContainer >
        <p>This is Page A</p>
        <NavLink to='/b'>Go to B</NavLink>
    </AppContainer>;
}

export default AComponent;
