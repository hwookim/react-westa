## 설명 흐름

Todo 추가하기
- value 값 state로 관리
- keyDown 이벤트로 Todo 추가
- map을 이용해서 반복 렌더링

Todo 삭제하기
- state 변경 시 무조건 새 객체(배열) 이용

각 사용자 별 Todo 쓰기
- 상수 데이터로 먼저 보여주기
- mockData로 useEffect, fetch 보여주기
- todos를 모두가 공유함 -> 컴포넌트 분리

## 설명해줘야 할 것들

1. 리액트의 기본 구조

```jsx
const 컴포넌트 이름 = (props) => {
    // state 및 함수 선언

    return (
        //태그
    )
}
```

- 한 파일에 하나의 컴포넌트
- 분리는 나중에

2. state 이용 방법

- inputValue 관리, 이벤트 함수와 함께 설명

3. 이벤트 함수 이용 방법

```jsx
const handleClick = () => {
    //로직
}

<button onClick={handleClick}>
```

4. 컴포넌트 분리 방법

- 누가 해야할 일인가?