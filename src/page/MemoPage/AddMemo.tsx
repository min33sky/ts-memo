import React, { useState } from 'react';
import Button from '../../components/Button';
import styled from 'styled-components';
import { Redirect } from 'react-router-dom';
import { Memo } from '../../model';
import { addMemo } from '../../api';

const TextArea = styled.textarea`
  width: 97%;
  height: 100px;
  border-radius: 4px;
  border: 1px solid #ccc;
`;

function AddMemo() {
  const [value, setValue] = useState('');
  const [saved, setSaved] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const content = value.trim();
    if (!content) {
      alert('내용을 입력하세요');
      return;
    }
    saveMemo({ content });
    setSaved(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
  };

  const saveMemo = (memo: Memo) => addMemo(memo);

  if (saved) {
    return <Redirect to='/memo' />;
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <TextArea
          placeholder='여기에 메모를 입력하세요'
          onChange={handleChange}
          value={value}
        />
        <Button to='/memo'>취소</Button>
        <Button primary>저장</Button>
      </form>
    </>
  );
}

export default AddMemo;
