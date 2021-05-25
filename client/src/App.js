import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import { useEffect } from 'react';
import {useDispatch} from 'react-redux'
import { setproducts } from './Redux/store';
function App() {
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   axios.get('http://localhost:1234/products').then(Products=>dispatch(setproducts(Products.data)))
  // }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
