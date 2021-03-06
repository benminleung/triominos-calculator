import React from 'react';
import './App.css';
import MainPage from './components/main-page/mainPage';

const App: React.FC = () => {
  return (
    <div className="App">
      <MainPage></MainPage>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

    </div>
  );
}

export default App;
