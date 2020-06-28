import * as React from 'react';

interface DateStringProps {
  timestamp: number;
}

/**
 * 날짜 출력 컴포넌트
 * @param timestamp 글 작성 날짜
 */
const DateString: React.FC<DateStringProps> = ({ timestamp }) => {
  if (!timestamp) return null;

  return (
    <span style={{ color: '#aaa' }}>
      {new Date(timestamp).toLocaleString()}
    </span>
  );
};

export default DateString;
