import React from 'react';
import styled from 'styled-components';
import DateString from '../../components/DateString';
import Button from '../../components/Button';
import { Memo } from '../../model';

const ContentWrapper = styled.div`
  border-top: 1px solid #ddd;
  padding-top: 10px;
  margin-bottom: 15px;
`;

const DateWrapper = styled.div`
  margin-bottom: 15px;
`;

interface MemoViewerProps {
  memo: Memo;
  onDeleteMemo: (id: number) => void;
}

/**
 * 메모 내용을 보여주는 컴포넌트
 * @param param0 메모
 * @param param0 메모 삭제 함수
 */
function MemoViewer({ memo, onDeleteMemo }: MemoViewerProps) {
  return (
    <>
      <Button onClick={() => onDeleteMemo(memo.id!)}>삭제</Button>
      <ContentWrapper>
        <DateWrapper>
          {memo?.createdAt && <DateString timestamp={memo.createdAt} />}
        </DateWrapper>
        <div>{memo?.content}</div>
      </ContentWrapper>
    </>
  );
}

export default MemoViewer;
