import { Memo } from '../model';

/******************************************************************
 *
 * 메모장 예제에서 사용할 데이터와 함수를 제공한다.
 *
 ******************************************************************/

let store: Memo[] = [
  { id: 5, content: '다섯번째 메모입니다.', createdAt: Date.now() },
  { id: 4, content: '네번째 메모입니다.', createdAt: Date.now() - 1 },
  { id: 3, content: '세번째 메모입니다.', createdAt: Date.now() - 2 },
  { id: 2, content: '두번째 메모입니다.', createdAt: Date.now() - 3 },
  { id: 1, content: '첫번재 메모입니다.', createdAt: Date.now() - 4 },
];

/**
 * 메모 리스트를 가져온다.
  - 삭제된 메모는 제외하고 날짜 순으로 정렬한 데이터를 제공한다.
 */
export const fetchMemoList = () =>
  store
    .filter((memo) => !memo.deleted)
    .sort((a, b) => b.createdAt! - a.createdAt!);

/**
 * 삭제된 메모 리스트를 가져온다.
 */
export const fetchDeletedMemoList = () =>
  store
    .filter((memo) => !!memo.deleted)
    .sort((a, b) => b.createdAt! - a.createdAt!);

/**
 * 메모를 가져온다
 * @param memoId 메모 아이디
 */
export const fetchMemo = (memoId: number) => store.find((m) => m.id === memoId);

/**
 * 메모를 추가한다.
 * @param memo 메모 내용
 */
export const addMemo = (memo: Memo) => {
  const lastMemo = store.sort((a, b) => b.id! - a.id!)[0];
  memo.id = lastMemo ? lastMemo.id! + 1 : 1;
  memo.createdAt = Date.now();
  store = [memo, ...store];
  return memo;
};

/**
 * 메모를 삭제한다.
 * - 복구를 위해서 flag로 삭제 처리를 한다.
 * @param memoId 메모 아이디
 */
export const deleteMemo = (memoId: number) => {
  store = store.map((memo) => ({
    ...memo,
    deleted: memo.id === memoId ? true : memo.deleted,
  }));
};

/**
 * 삭제된 메모를 복원한다.
 * @param memoId 메모 아이디
 */
export const restoreMemo = (memoId: number) => {
  store = store.map((memo) => ({
    ...memo,
    deleted: memo.id === memoId ? false : memo.deleted,
  }));
};
