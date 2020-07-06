import { FETCH_MEMO_LIST_REQUEST, fetchMemoListRequest } from './memo';

/*
 * ACTION TYPE
 */
// API 요청 끝
export const CLEAR_API_CALL_STATUS = 'CLEAR_API_CALL_STATUS' as const;

/*
 * ACTION CREATOR
 */
export const clearApiCallStatus = () => ({
  type: CLEAR_API_CALL_STATUS,
});

/*
 * ACTION TYPE
 */
type AppAction =
  | ReturnType<typeof clearApiCallStatus>
  | ReturnType<typeof fetchMemoListRequest>;

/*
 * STATE
 */
export interface AppState {
  apiCalling: boolean; // API 호출 요청
}

const initialState: AppState = {
  apiCalling: false,
};

/**
 * 앱의 전반적인 데이터를 관리하는 리듀서
 * @param state
 * @param action
 */
function appReducer(
  state: AppState = initialState,
  action: AppAction,
): AppState {
  switch (action.type) {
    case FETCH_MEMO_LIST_REQUEST:
      return {
        ...state,
        apiCalling: true,
      };

    case CLEAR_API_CALL_STATUS:
      return {
        ...state,
        apiCalling: false,
      };

    default:
      return state;
  }
}

export default appReducer;
