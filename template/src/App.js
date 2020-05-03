import React from 'react';
import logo from './logo.svg';
import styled from "styled-components/macro"
import tw from "tailwind.macro"
import './App.css';
// use tailwind classes the styled way
const Header = styled.header`
  ${tw`bg-blue-300 min-h-screen flex flex-col items-center justify-center text-xl text-purple-600`};
`;
const App = () => {
  return (
    <div css={tw`text-center`}>
      <Header>
        <img css={tw`text-pink-600`} src={logo} className="App-logo" alt="logo" />
        <p css={tw`text-l text-purple-400`}>
        Edit <code>src/App.js</code> and save to reload.
            together.
          </p>
          <p css={tw`text-xl text-red-500`}>
            Using <code>tailwind</code> and <code>styled-components</code>{' '}
            together.
          </p>
      </Header>
    </div>
  );
}

export default App;
