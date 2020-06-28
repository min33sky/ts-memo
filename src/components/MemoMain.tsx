import React, { useCallback } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

const MemoMainWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const ClickArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20%;
  height: 20%;
  border: 2px solid black;
  border-radius: 10px;
  font-size: 3rem;
  transition: all ease-in 0.2s;
  cursor: pointer;

  &:hover {
    background-color: tomato;
    color: palegoldenrod;
  }
`;

/**
 * 메모 페이지의 시작 컴포넌트
 */
function MemoMain() {
  const history = useHistory();

  const handleClick = useCallback(() => {
    history.push('/memo/add');
  }, [history]);

  return (
    <MemoMainWrapper>
      <ClickArea onClick={handleClick}>Click!</ClickArea>
    </MemoMainWrapper>
  );
}

export default MemoMain;
