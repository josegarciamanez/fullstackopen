import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './components/Header';
import Content from './components/Content';
import Total from './components/Total';

const App = () => {
  const course = 'Half Stack application development';
  const courses = {
    part1: 'Fundamentals of React',
    exercises1: 10,
    part2: 'Using props to pass data',
    exercises2: 7,
    part3: 'State of a component',
    exercises3: 14,
  };

  return (
    <div>
      <Header course={course} />
      <Content {...courses} />
      <Total {...courses} />
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
