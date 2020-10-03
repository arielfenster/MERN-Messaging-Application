import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'antd';
import styled from 'styled-components';

const Div = styled.div`
  height: 100vh;
  width: 100vw;
  border: 5px solid black;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
`;

const buttonStyle = {
  height: '100%',
  fontSize: '2em',
};

const StartPage = () => {
  return (
    <Div>
        <Link to='/create'>
          <Button style={buttonStyle} type='link'> Create message </Button>
        </Link>

        <Link to='/manage'>
          <Button style={buttonStyle} type='link'> Manage messages </Button>
        </Link>
    </Div>
  );
}

export default StartPage;
