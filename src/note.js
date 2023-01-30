// Recoil - selector 사용법

// useRecoilState 는 atom , selector 둘다 사용 가능.
//  array의 첫번째 요소는 atom 값 or selector 의 get 함수.
// array의 두번째 요소는 atom을 수정하는 함수 or selector의 set property를 실행시키는 함수.
// const [minutes, setMinutes] = useRecoilState(minuteState);
// const [hours, setHours] = useRecoilState(hourSelector);
// 2개의 atom을 만드는 대신 selector 사용. 
// minuteState : 1개의 state -> atom
// hourSelector : 2개의 property -> selector

