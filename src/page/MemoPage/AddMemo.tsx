import React, { useState } from 'react';
import Button from '../../components/Button';
import styled from 'styled-components';
import { Memo } from '../../model';

const TextArea = styled.textarea`
  width: 97%;
  height: 100px;
  border-radius: 4px;
  border: 1px solid #ccc;
`;

interface AddMemoProps {
  onSubmit(memo: Memo): void;
}

function AddMemo({ onSubmit }: AddMemoProps) {
  const [value, setValue] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const content = value.trim();
    if (!content) {
      alert('내용을 입력하세요');
      return;
    }
    onSubmit({ content });
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
  };

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
