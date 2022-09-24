/* eslint-disable  */

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let post = '강남 우동 맛집';
  let [글제목, 첫째변경] = useState(['남자 코트 추천','강남 우동맛집', '파이썬독학']);
  let [따봉, 따봉변경] = useState(0);

  function firChange() {
    let newArr = [...글제목];

    newArr[0] = '여자 코트 추천';
    첫째변경(newArr);
  }

  return (
    <div className="App">
      <div className="black-nav">
        <h4>ReactLogo</h4>
      </div>
      <button>가나다 순 정렬</button>
      <br />
      <span onClick={firChange}>바꾸기</span>
      <div className="list">
        <h4>{ 글제목[0] } <span onClick={() => { 따봉변경(따봉+1)} }>👍</span> {따봉} </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{ 글제목[1] }</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{ 글제목[2] }</h4>
        <p>2월 17일 발행</p>
      </div>
    </div>
  );
}

export default App;
