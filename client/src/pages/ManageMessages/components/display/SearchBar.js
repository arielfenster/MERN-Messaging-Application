import React from 'react';
import { Input } from 'antd';


const SerachBar = ({ onChange }) => {

  const handleChange = (event) => {
    onChange(event.target.value);
  }

  return (
    <div>
      <Input
        type='text'
        size='large'
        placeholder='Search messages by user id...'
        autoFocus
        onChange={handleChange}
        style={{ textAlign: "center" }}
        />
    </div>
  );
}

export default SerachBar;
