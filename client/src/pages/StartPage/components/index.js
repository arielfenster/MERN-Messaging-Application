import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'antd';

const StartPage = () => {
  return (
    <div>
      <Link to='/create'>
        <Button type='link'> Create message </Button>
      </Link>

      <Link to='/manage'>
        <Button type='link'> Manage messages </Button>
      </Link>
    </div>
  );
}

export default StartPage;
