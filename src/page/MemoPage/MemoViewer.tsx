import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import DateString from '../../components/DateString';
import Button from '../../components/Button';
import { Memo } from '../../model';
import { fetchMemo, deleteMemo } from '../../api';
import { RouteComponentProps, Redirect } from 'react-router-dom';

const Div = styled.div`
  border-top: 1px solid #ddd;
  padding-top: 10px;
  margin-bottom: 15px;
`;

const DateDiv = styled.div`
  margin-bottom: 15px;
`;

interface MemoMatchProps {
  id: string;
}

function MemoViewer({ match }: RouteComponentProps<MemoMatchProps>) {
  const [memo, setMemo] = useState<Memo | null>(null);
  const [deleted, setDeleted] = useState(false);

  useEffect(() => {
    fetchData(match.params.id);
  }, [match]);

  const fetchData = (id: string) => {
    const memoId = parseInt(id || '0', 10);
    const memo = fetchMemo(memoId);

    if (memo) {
      setMemo(memo);
    }
  };

  const onDelete = () => {
    const memoId = parseInt(match.params.id || '0', 10);
    deleteMemo(memoId);
    setDeleted(true);
  };

  if (deleted) {
    return <Redirect to='/memo' />;
  }

  return (
    <>
      <Button primary onClick={onDelete}>
        삭제
      </Button>
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
