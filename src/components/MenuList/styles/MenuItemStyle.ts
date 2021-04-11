import styled from 'styled-components';

interface MenuItemWrapperProps {
  first?: boolean;
  active?: boolean;
}

/*
  ? styled-components에서 HTML ELEMENT에 props를 추가해서 스타일링 하기
 */
export const MenuItemWrapper = styled.li<MenuItemWrapperProps>`
  padding: 0;
  height: 3em;
  border-bottom: 1px solid #ddd;
  border-top: ${(props) => {
    return props.first ? '1px solid #ddd' : 'none';
  }};

  display: flex;
  justify-content: center;
  align-items: center;

  transition: 0.5s all;

  background-color: ${(props) => {
    // ? !important - 홀수 아이템에도 색깔을 강제 적용한다.
    return props.active ? 'pink !important' : 'white';
  }};

  &:nth-child(odd) {
    background-color: ghostwhite;
  }

  &:hover {
    background-color: turquoise;
  }
`;
