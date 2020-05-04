import * as React from 'react';
import Button from './Button';

function AddMemoButton() {
  return (
    <Button primary to='/memo/add'>
      새로운 메모
    </Button>
  );
}

export default AddMemoButton;
