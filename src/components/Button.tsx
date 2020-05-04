import * as React from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

interface ButtonProps {
  to?: string;
  primary?: boolean;
  onClick?(): void;
}

// MixIn
const BtnStyle = css<ButtonProps>`
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
`;

const StyledButton = styled.button<ButtonProps>`
  ${BtnStyle}
`;

const LinkButton = styled(Link)<ButtonProps>`
  &.primary {
    color: white;
  }
`;

export const SideMemuButton = styled(Link)`
  flex: 1;
  text-align: center;
`;

const Button: React.FC<ButtonProps> = (props) => {
  const { to, children, primary, onClick } = props;
  const isLink = !!to;

  const renderButton = () => {
    return (
      <StyledButton primary={primary} onClick={onClick}>
        {children}
      </StyledButton>
    );
  };

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
