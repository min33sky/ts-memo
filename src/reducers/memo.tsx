import { Memo } from '../model';

// ***** Action Type ***** //

export const FETCH_MEMO_LIST_REQUEST = 'memo/FETCH_MEMO_LIST_REQUEST' as const;
export const FETCH_MEMO_LIST_SUCCESS = 'memo/FETCH_MEMO_LIST_SUCCESS' as const;
export const FETCH_MEMO_LIST_FAILURE = 'memo/FETCH_MEMO_LIST_FAILURE' as const;
export const FETCH_DELETED_MEMO_LIST = 'memo/FETCH_DELETED_MEMO_LIST' as const;
export const FETCH_MEMO = 'memo/FETCH_MEMO' as const;
export const FETCH_DELETED_MEMO = 'memo/FETCH_DELETED_MEMO' as const;
export const ADD_MEMO_REQUEST = 'memo/ADD_MEMO_REQUEST' as const;
export const ADD_MEMO_SUCCESS = 'memo/ADD_MEMO_SUCCESS' as const;
export const ADD_MEMO_FAILURE = 'memo/ADD_MEMO_FAILURE' as const;
export const DELETE_MEMO = 'memo/DELETE_MEMO' as const;
export const RESTORE_MEMO = 'memo/RESTORE_MEMO' as const;

// ***** Actino Creator ***** //

/**
 * 메모 리스트를 요청하는 액션 함수
 */
export const fetchMemoListRequest = () => ({
  type: FETCH_MEMO_LIST_REQUEST,
});

/**
 * DB에서 메모들을 모두 가져오는 액션 함수
 * @param memos DB에 저장되어 있는 메모들
 */
export const fetchMemoListSuccess = (memos: Memo[]) => ({
  type: FETCH_MEMO_LIST_SUCCESS,
  payload: memos,
});

export const fetchMemoListFailure = () => ({
  type: FETCH_MEMO_LIST_FAILURE,
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

/**
 * 메모 저장 요청 액션 함수
 * @param memo DB에 저장할 메모
 */
export const addMemoRequest = (memo: Memo) => ({
  type: ADD_MEMO_REQUEST,
  payload: memo,
});

/**
 * 스토어에 메모를 저장하라는 액션 함수
 * @param memo 스토어에 저장할 메모
 */
export const addMemoSuccess = (memo: Memo) => ({
  type: ADD_MEMO_SUCCESS,
  payload: memo,
});

/**
 * DB에 메모 저장 실패 액션 함수
 * @param message 에러 메세지
 */
export const addMemoFailure = (message: string) => ({
  type: ADD_MEMO_FAILURE,
  payload: message,
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
  | ReturnType<typeof fetchMemoListSuccess>
  | ReturnType<typeof fetchDeletedMemoList>
  | ReturnType<typeof fetchMemo>
  | ReturnType<typeof fetchDeletedMemo>
  | ReturnType<typeof addMemoSuccess>
  | ReturnType<typeof addMemoFailure>
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

function memoReducer(
  state: MemoState = initialState,
  action: MemoAction,
): MemoState {
  switch (action.type) {
    case FETCH_MEMO_LIST_SUCCESS: {
      return {
        ...state,
        memos: action.payload.map((memo) => ({ ...memo })),
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

    case ADD_MEMO_SUCCESS: {
      return {
        ...state,
        memos: [action.payload, ...state.memos],
      };
    }

    case ADD_MEMO_FAILURE: {
      // TODO: 에러 메세지 처리
      return {
        ...state,
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
