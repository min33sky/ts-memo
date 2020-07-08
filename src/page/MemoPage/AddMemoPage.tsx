import React, { useState } from 'react';
import Button from '../../components/Button';
import styled from 'styled-components';
import { Memo } from '../../model';

const TextArea = styled.textarea`
  width: 97%;
  height: 200px;
  border-radius: 4px;
  border: 1px solid #ccc;
  margin-bottom: 10px;
`;

const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

interface AddMemoPageProps {
  onSubmit(memo: Memo): void;
  loading: boolean;
}

/**
 * 새 메모를 작성하는 페이지
 * @param onSubmit 메모 등록 함수
 */
function AddMemoPage({ onSubmit, loading }: AddMemoPageProps) {
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
      <Form onSubmit={handleSubmit}>
        <TextArea
          placeholder='여기에 메모를 입력하세요'
          onChange={handleChange}
          value={value}
        />
        <Button to='/memo'>취소</Button>
        <Button disabled={loading} primary>
          저장
        </Button>
      </Form>
    </>
  );
}

export default AddMemoPage;
