export interface Memo {
  id?: number;
  content: string;
  createdAt?: number;
  deleted?: boolean; // ? 물리적 제거가 아니라 Flag 값으로 삭제 여부 판단
}

export interface Toast {
  id: number;
  text: string;
}

export interface Dialog {
  type: 'alert' | 'confirm';
  text: string;
}
