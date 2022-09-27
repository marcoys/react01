/* eslint-disable  */

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let post = '강남 우동 맛집';
  let [글제목, 글제목변경] = useState(['남자 코트 추천','강남 우동맛집', '파이썬독학']);
  let [따봉, 따봉변경] = useState(0);
  let [modal, setModal] = useState(false);

  function firChange() {
    let newArr = [...글제목];

    newArr[0] = '여자 코트 추천';
    글제목변경(newArr);
  }

  function gnd() {
    let gndArr = [...글제목];

    gndArr.sort();
    글제목변경(gndArr);
  }

  function modalToggle() {
    if (modal == false) {
      setModal(true);
    } else {
      setModal(false);
    }
  }

  return (
    <div className="App">
      <div className="black-nav">
        <h4>ReactLogo</h4>
      </div>
      <button onClick={gnd}>가나다 순 정렬</button>
      <br />
      <span onClick={firChange}>바꾸기</span>
      {/* <div className="list">
        <h4 onClick={modalToggle}>
          {글제목[0]}{' '}
          <span
            onClick={() => {
              따봉변경(따봉 + 1);
            }}
          >
            👍
          </span>{' '}
          {따봉}{' '}
        </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4 onClick={modalToggle}>{글제목[1]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4 onClick={() => {setModal(!modal)}}>{글제목[2]}</h4>
        <p>2월 17일 발행</p>
      </div> */}

      {
        글제목.map(function(a, i) {
          return (
            <div className="list" key={i}>
              <h4 onClick={() => {setModal(!modal)}}>{글제목[i]}<span
            onClick={() => {
              따봉변경(따봉 + 1);
            }}
          >
            👍
          </span>{' '}
          {따봉}{' '}</h4>
              <p>2월 17일 발행</p>
            </div>
          )
        })
      }

      {
        //조건식 ? 참일 떄 실행되는 코드 : 거짓일때 실행되는 코드 --> 삼항연산자
        modal == true ? <Modal></Modal> : null
      }
    </div>
  );
}

function Modal() {
  return (
    <div className="modal">
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
}

export default App;
