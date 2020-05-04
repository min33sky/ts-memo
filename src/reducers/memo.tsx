import { Memo } from '../model';

// ***** Action Type ***** //

export const FETCH_MEMO_LIST = 'memo/FETCH_MEMO_LIST' as const;

// ***** Actino Creator ***** //

/**
 * 메모들을 모두 가져오는 액션 생성 함수
 * @param memos DB에 저장되어 있는 메모들
 */
export const fetchMemoList = (memos: Memo[]) => ({
  type: FETCH_MEMO_LIST,
  payload: memos,
});

// ***** Action Type ***** //

type MemoAction = ReturnType<typeof fetchMemoList>;

// ***** State ***** //

export interface MemoState {
  memos: Memo[];
}

const initialState: MemoState = {
  memos: [],
};

// ***** Reducer ***** //

function memoReducer(state = initialState, action: MemoAction): MemoState {
  switch (action.type) {
    case FETCH_MEMO_LIST:
      const fetchedMemos = action.payload;
      return {
        ...state,
        memos: fetchedMemos.map((memo) => ({ ...memo })),
      };

    default:
      return state;
  }
}

export default memoReducer;
