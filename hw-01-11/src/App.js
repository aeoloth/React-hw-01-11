import React from 'react';
import logo from './logo.svg';
import './App.css';
import "antd/dist/antd.css";
// import "./index.css";
import { Typography, Space } from 'antd';

const { Text, Link } = Typography;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Text type="success">Первое занятие по курсу React.js было очень интересным!</Text>
        <Text type="warning">Я узнал много нового и хотел бы улучшить свои навыки</Text>
      </header>
    </div>
  );
}

export default App;
