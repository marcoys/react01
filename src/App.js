/* eslint-disable  */

import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {

  let today = new Date();
  let month = today.getMonth() + 1;
  let date = today.getDate();

  let post = '강남 우동 맛집';
  let [글제목, 글제목변경] = useState(['남자 코트 추천','강남 우동맛집', '파이썬독학']);
  let [따봉, 따봉변경] = useState([0, 1, 0]);
  let [modal, setModal] = useState(false);
  let [title, setTitle] = useState(0);
  let [입력값, 입력값변경] = useState('');
  let [삭제, 삭제변경] = useState(0);

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

  function tUP(i) {
    let upArr = [...따봉];

    upArr[i] = upArr[i] + 1;
    따봉변경(upArr);
  }

  function addTxt() {
    let titVal = document.querySelector('#iptit').value;
    let addArr = [...글제목];
    if ( titVal == '' ) {
      alert('제목을 입력해주세여')
      return false;
    }

    addArr.unshift(입력값);
    console.log(글제목변경(addArr));

    titVal = '';
  }

  function delTxt(n) {
    let delArr = [...글제목];

    delArr.splice(n,1);
    글제목변경(delArr);
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
              <h4 onClick={() => {setModal(!modal); setTitle(i)}}>{글제목[i]}<span
            onClick={(e) => { e.stopPropagation(); tUP(i) }}>👍</span>{' '}
            {따봉[i]}{' '}</h4>
              <p>2월 17일 발행</p>
              <button onClick={() => {delTxt(i)}}>삭제</button>
            </div>
          )
        })
      }

      <input id='iptit' onChange={(e) => {입력값변경(e.target.value);
      console.log(입력값)}}/>
      <button onClick={addTxt}>글발행</button>

      {
        //조건식 ? 참일 떄 실행되는 코드 : 거짓일때 실행되는 코드 --> 삼항연산자
        modal == true ? <Modal 글제목={글제목} 글수정={firChange} title={title}></Modal> : null
      }

      <Moda12 />
    </div>
  );
  
}

function Modal(props) {
  return (
    <div className="modal">
      <h4>{props.글제목[props.title]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button onClick={props.글수정}>글수정</button>
    </div>
  );
}

class Moda12 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'kim',
      age : 20
    }
  }
  render() {
    return (
      <div>안녕 {this.state.age}
        <button onClick={() => {
          this.setState({age : 21})
        }}>버튼</button>
      </div>
    )
  }
}

export default App;
