import "dotenv/config";
import React from 'react';
import './App.css';
import axios from 'axios'

axios.get(`http://ec2-3-39-232-45.ap-northeast-2.compute.amazonaws.com:4002`)
  .then(function (response) {
    // 성공 핸들링
    console.log(response);
  })
  .catch(function (error) {
    // 에러 핸들링
    console.log(error);
  })
  .then(function () {
    // 항상 실행되는 영역
  });
console.log("🚀 ~ file: App.tsx ~ line 19 ~ process.env.URL", process.env.URL)

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
      </header>
    </div>
  );
}

export default App;
