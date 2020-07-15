import {
    FETCH_MEMO_LIST_REQUEST,
    fetchMemoListRequest,
    ADD_MEMO_REQUEST,
    addMemoRequest,
} from './memo';
import { Dialog, Toast } from '../model';

/*
 * ACTION TYPE
 */
// API 요청 끝
export const CLEAR_API_CALL_STATUS = 'CLEAR_API_CALL_STATUS' as const;
// 다이얼로그 띄우기
export const SHOW_DIALOG = 'SHOW_DIALOG' as const;
export const CONFIRM_DIALOG = 'CONFIRM_DIALOG' as const;
export const CANCEL_DIALOG = 'CANCEL_DIALOG' as const;

// 토스트 관련
export const SHOW_TOAST = 'SHOW_TOAST' as const;
export const ADD_TOAST = 'ADD_TOAST' as const;
export const REMOVE_TOAST = 'REMOVE_TOAST' as const;

/*
 * ACTION CREATOR
 */
export const clearApiCallStatus = () => ({
    type: CLEAR_API_CALL_STATUS,
});

export const showDialog = (dialog: Dialog) => ({
    type: SHOW_DIALOG,
    payload: dialog,
});

export const confirmDialog = () => ({
    type: CONFIRM_DIALOG,
});

export const cancelDialog = () => ({
    type: CANCEL_DIALOG,
});

export const showToast = (text: string) => ({
    type: SHOW_TOAST,
    payload: text,
});

export const addToast = (toast: Toast) => ({
    type: ADD_TOAST,
    payload: toast,
});

export const removeToast = (id: number) => ({
    type: REMOVE_TOAST,
    payload: id,
});

/*
 * ACTION TYPE
 */
type AppAction =
    | ReturnType<typeof clearApiCallStatus>
    | ReturnType<typeof addMemoRequest>
    | ReturnType<typeof fetchMemoListRequest>
    | ReturnType<typeof showDialog>
    | ReturnType<typeof confirmDialog>
    | ReturnType<typeof cancelDialog>
    | ReturnType<typeof showToast>
    | ReturnType<typeof addToast>
    | ReturnType<typeof removeToast>;

/*
 * STATE
 */
export interface AppState {
    apiCalling: boolean; // API 호출 요청
    dialog?: Dialog; // 다이얼로그
    toasts: Toast[]; // 토스트 (여러개 띄울 수 있음)
}

const initialState: AppState = {
    apiCalling: false,
    dialog: undefined,
    toasts: [],
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
        case ADD_MEMO_REQUEST:
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

        case SHOW_DIALOG:
            return {
                ...state,
                dialog: action.payload,
            };

        case CANCEL_DIALOG:
        case CONFIRM_DIALOG:
            return {
                ...state,
                dialog: undefined,
            };

        case ADD_TOAST:
            return {
                ...state,
                toasts: [...state.toasts, action.payload],
            };

        case REMOVE_TOAST:
            return {
                ...state,
                toasts: state.toasts.filter(
                    (toast) => toast.id !== action.payload,
                ),
            };

        default:
            return state;
    }
}

export default appReducer;
