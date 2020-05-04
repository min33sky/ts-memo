import React from 'react';
import { Memo } from '../../model';

interface MemoListPageProps {
  memos: Memo[];
}

function MemoListPage({ memos }: MemoListPageProps) {
  return <div>메모리스트페이지</div>;
}

export default MemoListPage;
