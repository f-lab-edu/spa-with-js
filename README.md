# spa-with-js
Vanilla JavaScript를 사용한 Single Page Application(SPA)

### 컴포넌트 작성법
- 예시 : components/todo.js
1. 컴포넌트는 class로 선언하여 인스턴스화 => 불러올 곳에서 new 컴포넌트()
2. **constructor**에서 props를 받아 사용, state 선언 
3. **render** 함수를 선언해서 화면에 렌더링

### 데이터 작성법
- 예시 : api/todoService.js
1. 데이터 별로 그룹화 하여 파일 생성 후 만들어둔 API를 사용 하여 함수 작성 후 export
2. config 변경 시 api/config.js에서 변경

### 스타일 작성법
1. 컴포넌트와 동일한 이름의 css파일을 styles 폴더안에 생성하여 작성

### 라우팅 방법
- 예시 : /routes.js
- 해당 파일에 routes 변수 안에 { path: '주소', component : 컴포넌트 } 로 매칭하여 사용
