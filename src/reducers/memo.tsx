import { Memo } from '../model';

// ***** Action Type ***** //

export const FETCH_MEMO_LIST = 'memo/FETCH_MEMO_LIST' as const;
export const FETCH_DELETED_MEMO_LIST = 'memo/FETCH_DELETED_MEMO_LIST' as const;
export const FETCH_MEMO = 'memo/FETCH_MEMO' as const;
export const FETCH_DELETED_MEMO = 'memo/FETCH_DELETED_MEMO' as const;
export const ADD_MEMO = 'memo/ADD_MEMO' as const;
export const DELETE_MEMO = 'memo/DELETE_MEMO' as const;
export const RESTORE_MEMO = 'memo/RESTORE_MEMO' as const;

// ***** Actino Creator ***** //

/**
 * 메모들을 모두 가져오는 액션 생성 함수
 * @param memos DB에 저장되어 있는 메모들
 */
export const fetchMemoList = (memos: Memo[]) => ({
  type: FETCH_MEMO_LIST,
  payload: memos,
});

export const fetchDeletedMemoList = (memos: Memo[]) => ({
  type: FETCH_DELETED_MEMO_LIST,
  payload: memos,
});

export const fetchMemo = (memo: Memo) => ({
  type: FETCH_MEMO,
  payload: memo,
});

export const fetchDeletedMemo = (memo: Memo) => ({
  type: FETCH_DELETED_MEMO,
  payload: memo,
});

export const addMemo = (memo: Memo) => ({
  type: ADD_MEMO,
  payload: memo,
});

export const deleteMemo = (id: number) => ({
  type: DELETE_MEMO,
  payload: id,
});

export const restoreMemo = (id: number) => ({
  type: RESTORE_MEMO,
  payload: id,
});

// ***** Action Type ***** //

type MemoAction =
  | ReturnType<typeof fetchMemoList>
  | ReturnType<typeof fetchDeletedMemoList>
  | ReturnType<typeof fetchMemo>
  | ReturnType<typeof fetchDeletedMemo>
  | ReturnType<typeof addMemo>
  | ReturnType<typeof deleteMemo>
  | ReturnType<typeof restoreMemo>;

// ***** State ***** //

export interface MemoState {
  memos: Memo[];
  deletedMemos: Memo[];
}

const initialState: MemoState = {
  memos: [],
  deletedMemos: [],
};

// ***** Reducer ***** //

function memoReducer(state = initialState, action: MemoAction): MemoState {
  switch (action.type) {
    case FETCH_MEMO_LIST: {
      return {
        ...state,
        memos: action.payload,
      };
    }

    case FETCH_DELETED_MEMO_LIST: {
      return {
        ...state,
        deletedMemos: action.payload,
      };
    }

    case FETCH_MEMO: {
      return {
        ...state,
        memos: state.memos.map((memo) => {
          if (memo.id !== action.payload.id) return memo;
          return { ...action.payload };
        }),
      };
    }

    case FETCH_DELETED_MEMO: {
      return {
        ...state,
        deletedMemos: state.deletedMemos.map((memo) => {
          if (memo.id !== action.payload.id) return memo;
          return { ...action.payload };
        }),
      };
    }

    case ADD_MEMO: {
      return {
        ...state,
        memos: [action.payload, ...state.memos],
      };
    }

    case DELETE_MEMO: {
      return {
        ...state,
        memos: state.memos.filter((memo) => memo.id !== action.payload),
      };
    }

    case RESTORE_MEMO: {
      // if (!action.payload) return state;
      return {
        ...state,
        deletedMemos: state.deletedMemos.filter(
          (memo) => memo.id !== action.payload,
        ),
      };
    }

    default:
      return state;
  }
}

export default memoReducer;
