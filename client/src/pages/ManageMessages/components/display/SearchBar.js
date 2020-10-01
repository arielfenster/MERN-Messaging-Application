import React from 'react';

const SerachBar = ({ onChange }) => {
  
  const handleChange = (event) => {
    onChange(event.target.value);
  }

  return (
    <div>
      <input
        type='text'
        placeholder='Search messages by user id...'
        autoFocus
        onChange={handleChange} />
    </div>
  );
}

export default SerachBar;
