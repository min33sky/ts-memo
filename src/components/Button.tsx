import * as React from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

interface ButtonProps {
  to?: string;
  primary?: boolean;
  onClick?(): void;
  disabled?: boolean;
}

// MixIn
const ButtonStyle = css<ButtonProps>`
  all: unset;
  display: inline-block;
  border: solid 1px #ccc;
  border-color: ${(props) => (props.primary ? '#2e6da4' : '#ccc')};
  border-radius: 4px;
  margin: 0 10px 10px 0;
  padding: 8px 16px;
  width: auto;
  overflow: visible;
  background: ${(props) => (props.primary ? '#337ab7' : 'transparent')};
  color: ${(props) => (props.primary ? '#fff' : 'inherit')};
  cursor: pointer;
  transition: all ease-in 0.2s;

  &:hover {
    background-color: palevioletred;
    color: white;
  }
`;

const StyledButton = styled.button<ButtonProps>`
  ${ButtonStyle}
`;

const LinkButton = styled(Link)<ButtonProps>`
  &.primary {
    color: white;
  }
`;

/**
 * 리스트에 들어가는 메뉴 버튼
 * react-router의 Link 컴포넌트를 내장하고 있다.
 */
export const ListItemButton = styled(Link)`
  /* 링크 클릭 범위를 전체 범위로 넓힌다. */
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const Button: React.FC<ButtonProps> = (props) => {
  const { to, children, primary, onClick, disabled } = props;
  const isLink = !!to;

  // 일반 버튼
  const renderButton = () => {
    return (
      <StyledButton primary={primary} onClick={onClick} disabled={disabled}>
        {children}
      </StyledButton>
    );
  };

  // 링크 버튼
  const renderLink = () => {
    if (!to) {
      return <div></div>;
    }

    return (
      <StyledButton primary={primary}>
        <LinkButton className={primary ? 'primary' : ''} to={to}>
          {children}
        </LinkButton>
      </StyledButton>
    );
  };

  return isLink ? renderLink() : renderButton();
};

export default Button;
