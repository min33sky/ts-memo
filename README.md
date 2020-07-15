# TS-Memo

> typescipt와 react-router를 활용한 메모장

[DEMO](http://ts-memo.now.sh)

## Modules

- react
- typescript
- react-router
- connected-react-router
- styled-components

## 에러 해결

1. HTML attribute warning (Link)[https://styled-components.com/docs/faqs#why-am-i-getting-html-attribute-warnings]

- div or a 태그에 비표준 속성을 추가했을 때 발생.
- 예) styled-components로 react-router의 Link에 임의 속성을 넣을 때 경고 발생
- (react-router의 Link안에는 a태그가 들어 있으므로)

> 해결 방법

```ts
const LinkButton = styled(Link)<ButtonProps>`
  &.primary {
    color: white;
  }
`;

// primary같은 비표준 속성은 일반 태그쪽으로 넣어주고
// 대신 Link 컴포넌트에 클래스를 넣어주는 것으로 해결
<StyledButton primary={primary}>
  <LinkButton className={primary ? 'primary' : ''} to={to}>
    {children}
  </LinkButton>
</StyledButton>;
```
