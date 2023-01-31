// Recoil - selector 사용법

// useRecoilState 는 atom , selector 둘다 사용 가능.
//  array의 첫번째 요소는 atom 값 or selector 의 get 함수.
// array의 두번째 요소는 atom을 수정하는 함수 or selector의 set property를 실행시키는 함수.
// const [minutes, setMinutes] = useRecoilState(minuteState);
// const [hours, setHours] = useRecoilState(hourSelector);
// 2개의 atom을 만드는 대신 selector 사용.
// minuteState : 1개의 state -> atom
// hourSelector : 2개의 property -> selector

// Trello App
// Drag And Drop 기능 추가를 위해 react-beautiful-dnd 설치
// -> npm i react-beautiful-dnd
// react 18 버전부터 설치 issue
// -> 해결책 :  npm i react-beautiful-dnd --legacy-peer-deps
// -> 타입 추가 : npm i @types/react-beautiful-react-dnd --legacy-peer-deps
// index.js에서 Strict 모드 제거

//  import { DragDropContext } from "react-beautiful-dnd";
// DragDropContext를 사용할 영역에만 생성해줘야됨.
// onDragEnd prop과 children 설정은 필수
// Droppable : 드롭할수 있는 영역  -> droppableId  & children 필요
// 이때 children은 함수만 가능
// Draggable : 드래그할수 있는 영역 ->  draggableId & index & children 필요
// 이때 children은 함수만 가능
