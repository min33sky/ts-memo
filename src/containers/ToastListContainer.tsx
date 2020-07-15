import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../reducers';
import ToastList from '../components/ToastList';

/**
 * 토스트 리스트 컨테이너
 */
function ToastListContainer() {
  const { toasts } = useSelector((state: RootState) => state.app);

  return <ToastList toasts={toasts} />;
}

export default ToastListContainer;
