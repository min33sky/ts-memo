import React from 'react';
import styled from 'styled-components';

const SkeletonWrapper = styled.div`
  margin: 10px;
`;

interface BarProps {
  width: string;
}

const Bar = styled.div<BarProps>`
  width: ${(props) => props.width};
  height: 13px;
  background: gray;
  margin-bottom: 8px;
  border-radius: 2px;
`;

/**
 * 로딩 중일 때 보여줄 컴포넌트
 */
function Skeleton() {
  return (
    <SkeletonWrapper>
      <Bar width={'90%'} />
      <Bar width={'50%'} />
      <Bar width={'80%'} />
    </SkeletonWrapper>
  );
}

export default Skeleton;
