import React from 'react';
import styled from 'styled-components';
import DateString from '../../components/DateString';
import Button from '../../components/Button';
import { Memo } from '../../model';

const Div = styled.div`
  border-top: 1px solid #ddd;
  padding-top: 10px;
  margin-bottom: 15px;
`;

const DateDiv = styled.div`
  margin-bottom: 15px;
`;

interface MemoViewerProps {
  memo: Memo;
  onDeleteMemo: (id: number) => void;
}
/**
 * 메모 내용을 보여주는 페이지
 * @param param0
 */
function MemoViewer({ memo, onDeleteMemo }: MemoViewerProps) {
  return (
    <>
      <Button onClick={() => onDeleteMemo(memo.id!)}>삭제</Button>
      <Div>
        <DateDiv>
          {memo?.createdAt && <DateString timestamp={memo.createdAt} />}
        </DateDiv>
        <div>{memo?.content}</div>
      </Div>
    </>
  );
}

export default MemoViewer;
