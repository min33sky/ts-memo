import React, { useState, useEffect, useRef } from 'react';
import Button from '../../components/Button';
import { RouteComponentProps, Redirect } from 'react-router-dom';
import { resotreMemo, fetchMemo } from '../../api';
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

interface RemoveMemoMatchProps {
  id: string;
}

function RemoveMemoViewer({
  match,
}: RouteComponentProps<RemoveMemoMatchProps>) {
  const [memo, setMemo] = useState<Memo | null>(null);
  const [restored, setRestored] = useState(false);
  const memoId = useRef<number>(0);

  useEffect(() => {
    memoId.current = parseInt(match.params.id || '0', 10);
    fetchData();
  }, [match.params.id]);

  const fetchData = () => {
    const data = fetchMemo(memoId.current);
    if (data) {
      setMemo(data);
    }
  };

  const onRestore = () => {
    // const memoId = parseInt(match.params.id || '0', 10);
    resotreMemo(memoId.current);
    setRestored(true);
  };

  if (restored) {
    return <Redirect to='/remove' />;
  }

  return (
    <>
      <Button onClick={onRestore}>복구</Button>
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
