import { RootState } from '../reducers';

// ? RootState를 상속하여 DefaultRootState 재정의
declare module 'react-redux' {
  // eslint-disable-next-line no-unused-vars
  interface DefaultRootState extends RootState {}
}
