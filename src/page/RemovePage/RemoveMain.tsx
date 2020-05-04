import React, { useEffect, useState } from 'react';
import { fetchDeletedMemoList } from '../../api';
import { RouteComponentProps } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 820px;
`;

const Div = styled.div`
  font-size: 3rem;
`;

function RemoveMain({ location }: RouteComponentProps) {
  const [removedDataLength, setRemovedDataLength] = useState(0);

  useEffect(() => {
    fetchData();
  }, [location.pathname]);

  const fetchData = () => {
    const data = fetchDeletedMemoList();
    setRemovedDataLength(data.length);
  };

  return (
    <Container>
      {removedDataLength ? (
        <Div>{removedDataLength}개의 쓰래기들....</Div>
      ) : (
        <Div>비어있어요</Div>
      )}
    </Container>
  );
}

export default RemoveMain;
