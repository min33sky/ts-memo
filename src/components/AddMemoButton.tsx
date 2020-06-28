import * as React from 'react';
import Button from './Button';

/**
 * 새 메모 작성 버튼
 */
function AddMemoButton() {
  return (
    <Button primary to='/memo/add'>
      글쓰기
    </Button>
  );
}

export default AddMemoButton;
