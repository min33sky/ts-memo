import React from 'react';
import Button from '../../components/Button';
import { Memo } from '../../model';
import DateString from '../../components/DateString';
import styled from 'styled-components';

const Div = styled.div`
  border-top: 1px solid #ddd;
  padding-top: 10px;
  margin-bottom: 15px;
`;

const DateDiv = styled.div`
  margin-bottom: 15px;
`;

interface RemoveMemoViewerProps {
  memo: Memo;
  onRestore: (id: number) => void;
}

function RemoveMemoViewer({ memo, onRestore }: RemoveMemoViewerProps) {
  return (
    <>
      <Button onClick={() => onRestore(memo.id!)}>복구</Button>
      <Div>
        <DateDiv>
          {memo?.createdAt && <DateString timestamp={memo.createdAt} />}
        </DateDiv>
        <div>{memo?.content}</div>
      </Div>
    </>
  );
}

export default RemoveMemoViewer;
